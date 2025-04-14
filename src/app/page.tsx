'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useWallet } from '@/contexts/wallet-context'
import { Loader2 } from 'lucide-react'

export default function Home() {
  const { isConnecting, connectWallet, error, account, balance } = useWallet()

  const router = useRouter()

  const handleConnectWallet = async () => {
    try {
      await connectWallet()
      router.push('/dashboard')
    } catch (err) {
      console.error('Erro ao conectar:', err)
    }
  }

  return (
    <div className="pt-16 min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Image Column - Order first on mobile, second on desktop */}
      <div className="relative w-full h-[400px] lg:h-screen order-first lg:order-last">
        <Image
          src="https://images.unsplash.com/photo-1520694478166-daaaaec95b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          alt="Cryptocurrency illustration"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content Column - Order second on mobile, first on desktop */}
      <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12 order-last lg:order-first">
        <div className="max-w-md mx-auto lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">
            Donate Crypto
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Sua plataforma de doações descentralizada. Autentique-se com sua
            carteira e crie sua campanha. Para doações, utilize o link da
            campanha existente.
          </p>

          {account ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div>
                  <p className="text-sm text-blue-700 font-medium">
                    Carteira Conectada
                  </p>
                  <p className="text-xs text-blue-600 mt-1">
                    {account?.slice(0, 6)}...{account?.slice(-4)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-blue-700 font-medium">Saldo</p>
                  <p className="text-xs text-blue-600 mt-1">{balance} POL</p>
                </div>
              </div>

              <Link href="/dashboard" className="w-full">
                <button
                  type="button"
                  className="flex items-center justify-center w-full px-5 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 rounded shadow transition"
                >
                  Acessar Dashboard
                </button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              <button
                type="button"
                onClick={handleConnectWallet}
                disabled={isConnecting}
                className="flex items-center justify-center w-full md:w-auto px-5 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 rounded shadow transition disabled:opacity-70"
              >
                {isConnecting ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    Conectando...
                  </>
                ) : (
                  <>
                    <Image
                      src="/metamask.svg"
                      width="32"
                      height="32"
                      className="mr-3"
                      alt="MetaMask"
                    />
                    Conectar com MetaMask
                  </>
                )}
              </button>
            </div>
          )}

          {account && (
            <div
              className="mt-4 w-full text-sm text-green-800 bg-green-100 border border-green-300 px-4 py-3 rounded shadow-sm"
              role="alert"
            >
              Usuário autenticado com sucesso!
            </div>
          )}

          {error !== null && (
            <div
              className="mt-4 w-full text-sm text-red-800 bg-red-100 border border-red-300 px-4 py-3 rounded shadow-sm"
              role="alert"
            >
              {error || 'Erro ao conectar com a MetaMask. Tente novamente.'}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
