import { Navigation } from '@/components/navigation'
import { WalletProvider } from '@/contexts/wallet-context'
import { ToastContainer } from 'react-toastify'

export default async function ApplicationLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <WalletProvider>
        <Navigation />
        {children}
      </WalletProvider>
      <ToastContainer />
    </>
  )
}
