import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'

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
  icons: {
    icon: '/favicon.png',
  },
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
        <>{children}</>
      </body>
    </html>
  )
}
