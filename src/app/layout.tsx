import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'

import { Navigation } from '@/components/navigation'
import { WalletProvider } from '@/contexts/wallet-context'
import { ToastContainer } from 'react-toastify'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Donate Crypto Dapp',
  description: 'A decentralized application for donating crypto',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WalletProvider>
          <Navigation />
          <main>{children}</main>
        </WalletProvider>
        <ToastContainer />
      </body>
    </html>
  )
}
