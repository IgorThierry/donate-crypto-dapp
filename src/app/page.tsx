import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
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
            Your decentralized donation platform. Authenticate with your wallet
            and create your campaign. For donations, use the existing campaign
            link.
          </p>

          <Link href="/create">
            <button
              type="button"
              className="flex items-center justify-center w-full md:w-auto px-5 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 rounded shadow transition"
            >
              <Image
                src="/metamask.svg"
                width="32"
                height="32"
                className="mr-3"
                alt="MetaMask"
              />
              Conectar com a MetaMask
            </button>
          </Link>
          <div
            className="mt-4 w-full text-sm text-green-800 bg-green-100 border border-green-300 px-4 py-3 rounded shadow-sm"
            role="alert"
          >
            Usuário autenticado com sucesso!
          </div>
        </div>
      </div>
    </div>
  )
}
