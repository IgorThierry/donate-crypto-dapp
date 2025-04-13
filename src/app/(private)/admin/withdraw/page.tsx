'use client'

import { useCallback, useEffect, useState } from 'react'

import Link from 'next/link'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { getErrorMessage } from '@/utils/getErrorMessage'
import { toast } from 'react-toastify'
import { Web3Provider } from '@/services/Web3Provider'
import { CampaignCreatedAlert } from '@/components/campaign-created-alert'

export default function AdminWithdraw() {
  const [isLoading, setIsLoading] = useState(true)
  const [isWithdrawing, setIsWithdrawing] = useState(false)
  const [balance, setBalance] = useState('0')

  const loadData = useCallback(async () => {
    try {
      setIsLoading(true)
      setBalance('0')

      const provider = Web3Provider.getInstance(window.ethereum)
      const feesBalance = await provider.feesBalance()
      setBalance(feesBalance)
    } catch (error) {
      const errorMessage = getErrorMessage(error)
      toast.error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }, [setIsLoading])

  const handleWithdraw = async () => {
    try {
      setIsWithdrawing(true)
      const provider = Web3Provider.getInstance(window.ethereum)
      const { transactionHash } = await provider.adminWithdrawFees()
      toast.success(<CampaignCreatedAlert message="Funds withdrawn successfully." transactionHash={transactionHash} />)
      loadData()
    } catch (error) {
      const errorMessage = getErrorMessage(error)
      toast.error(errorMessage)
    } finally {
      setIsWithdrawing(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [loadData])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    )
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
              disabled={isWithdrawing || balance === '0'}
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
