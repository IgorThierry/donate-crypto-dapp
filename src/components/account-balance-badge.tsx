import { Wallet } from 'lucide-react'

type AccountBalanceBadgeProps = {
  account: string
  balance: string
}

export function AccountBalanceBadge({
  account,
  balance,
}: AccountBalanceBadgeProps) {
  return (
    <div className="hidden md:flex items-center mr-4 text-sm">
      <div className="flex items-center bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
        <Wallet className="h-4 w-4 text-blue-600 mr-2" />
        <span className="text-blue-700 font-medium mr-2">
          {account.slice(0, 6)}...{account.slice(-4)}
        </span>
        <span className="text-blue-600 font-medium">{balance} POL</span>
      </div>
    </div>
  )
}
