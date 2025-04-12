'use client'

import { useState } from 'react'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function AdminWithdraw() {
  const [isWithdrawing, setIsWithdrawing] = useState(false)

  // This would typically come from your blockchain connection or API
  const [balance, setBalance] = useState('1250.75')

  const handleWithdraw = async () => {
    setIsWithdrawing(true)

    try {
      // Simulate API call or blockchain transaction
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log('Withdrawal processed')

      // Reset balance after withdrawal
      setBalance('0.00')

      // You could redirect or show a success message
      // router.push('/admin/dashboard')
    } catch (error) {
      console.error('Error processing withdrawal:', error)
    } finally {
      setIsWithdrawing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="text-purple-600 hover:text-purple-800 flex items-center"
          >
            <ArrowLeft className="h-5 w-5 mr-1" />
            Back to Dashboard
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Admin Withdrawal
          </h1>

          <div className="mb-10 space-y-2">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-500 mb-2">Available Balance</p>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">
                  {balance}
                </span>
                <span className="ml-2 text-xl text-gray-600">POL</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleWithdraw}
              disabled={isWithdrawing || Number.parseFloat(balance) <= 0}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-70 w-full md:w-auto"
            >
              {isWithdrawing ? 'Processing...' : 'Withdraw Funds'}
            </button>
          </div>

          {Number.parseFloat(balance) <= 0 && (
            <p className="text-center mt-4 text-gray-500">
              No funds available for withdrawal.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
