'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, LogOut, Wallet } from 'lucide-react'
import { useWallet } from '@/contexts/wallet-context'
import { isAdmin } from '@/utils/isAdmin'
import { AccountBalanceBadge } from './account-balance-badge'
import { ConnectButton } from './connect-wallet-button'
import { EnvAlertBar } from './env-alert-bar'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { account, balance, disconnectWallet } = useWallet()

  const accountFormatted = account?.slice(0, 6) + '...' + account?.slice(-4)

  return (
    <>
      <nav className="bg-white border-b border-gray-200 fixed w-full z-10">
        <EnvAlertBar />
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Donate Crypto
            </span>
          </Link>

          {account && (
            <AccountBalanceBadge
              account={account || ''}
              balance={balance || ''}
            />
          )}

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } w-full md:block md:w-auto`}
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  About
                </Link>
              </li>
              {isAdmin(account || '') && (
                <li>
                  <Link
                    href="/admin/withdraw"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  >
                    Admin
                  </Link>
                </li>
              )}

              <li className="md:hidden">
                <div className="flex items-center py-2 pl-3 pr-4 text-gray-900">
                  <Wallet className="h-4 w-4 mr-2" />
                  <span className="font-medium mr-2">{accountFormatted}</span>
                  <span>{balance} POL</span>
                </div>
              </li>
              {account ? (
                <li>
                  <button
                    onClick={disconnectWallet}
                    className="flex items-center w-full text-left py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    <span>Desconectar</span>
                  </button>
                </li>
              ) : (
                <li>
                  <ConnectButton size="sm" />
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
