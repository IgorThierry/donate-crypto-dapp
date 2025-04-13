'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { useRouter } from 'next/navigation'
import { deleteCookie, setCookie, getCookie } from 'cookies-next/client'

import { Web3Provider } from '@/services/Web3Provider'

// Tipos para o contexto
type WalletContextType = {
  account: string | null
  balance: string | null
  isConnected: boolean
  isConnecting: boolean
  error: string | null
  connectWallet: () => Promise<void>
  disconnectWallet: () => void
}

// Valor padrão do contexto
const defaultContext: WalletContextType = {
  account: null,
  balance: null,
  isConnected: false,
  isConnecting: false,
  error: null,
  connectWallet: async () => {},
  disconnectWallet: () => {},
}

// Criação do contexto
const WalletContext = createContext<WalletContextType>(defaultContext)

// Hook personalizado para usar o contexto
export const useWallet = () => useContext(WalletContext)

// Provider do contexto
export function WalletProvider({ children }: { children: ReactNode }) {
  const [account, setAccount] = useState<string | null>(null)
  const [balance, setBalance] = useState<string | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()

  // Verificar se o MetaMask está instalado ou se estamos em modo de simulação
  /* const checkIfMetaMaskIsAvailable = () => {
    const { ethereum } = window as any
    return Boolean(ethereum && ethereum.isMetaMask)
  } */

  // Conectar à carteira MetaMask (real ou simulada)
  const connectWallet = async () => {
    try {
      setIsConnecting(true)
      setError(null)

      const provider = Web3Provider.getInstance(window.ethereum)

      const account = await provider.login()
      const balance = await provider.getBalance(account)
      const foarmattedBalance = parseFloat(balance).toFixed(5)

      setAccount(account)
      setBalance(foarmattedBalance)

      setIsConnected(true)
      setCookie('isWalletConnected', 'true')
      setCookie('wallet', account)
    } catch (error: Error | unknown) {
      console.error('Erro ao conectar com MetaMask:', error)
      let errorMessage = 'Erro ao conectar com MetaMask'
      if (error instanceof Error) {
        errorMessage = error.message
      }
      setError(errorMessage)
    } finally {
      setIsConnecting(false)
    }
  }

  // Desconectar da carteira
  const disconnectWallet = () => {
    setAccount(null)
    setBalance(null)
    setIsConnected(false)
    deleteCookie('isWalletConnected')
    deleteCookie('wallet')

    router.push('/')
  }

  // Verificar se o usuário já estava conectado anteriormente
  useEffect(() => {
    const checkConnection = async () => {
      const isWalletConnected = getCookie('isWalletConnected') === 'true'

      if (isWalletConnected) {
        await connectWallet()
      }
    }

    checkConnection()
  }, [])

  const value = {
    account,
    balance,
    isConnected,
    isConnecting,
    error,
    connectWallet,
    disconnectWallet,
  }

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  )
}
