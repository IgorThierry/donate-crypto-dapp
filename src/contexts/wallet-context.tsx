'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

import { deleteCookie, setCookie, getCookie } from 'cookies-next/client'

import { Web3Provider } from '@/services/Web3Provider'
import { getStorageKey } from '@/utils/getStorageKey'

// Tipos para o contexto
type WalletContextType = {
  account: string | null
  balance: string | null
  isConnecting: boolean
  error: string | null
  connectWallet: () => Promise<void>
  disconnectWallet: () => void
}

// Valor padrão do contexto
const defaultContext: WalletContextType = {
  account: null,
  balance: null,
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
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState<string | null>(null)

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

      setCookie(getStorageKey('account'), account)
      setCookie(getStorageKey('balance'), foarmattedBalance)
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

    deleteCookie(getStorageKey('account'))
    deleteCookie(getStorageKey('balance'))
    deleteCookie('activeTab')
  }

  // Verificar se o usuário já estava conectado anteriormente
  useEffect(() => {
    const checkConnection = async () => {
      const account = getCookie(getStorageKey('account')) || null

      if (account) {
        await connectWallet()
      }
    }

    checkConnection()
  }, [])

  const value = {
    account,
    balance,
    isConnecting,
    error,
    connectWallet,
    disconnectWallet,
  }

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  )
}
