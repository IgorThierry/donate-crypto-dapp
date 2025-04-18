'use client'

import { Button } from '@/components/ui/button'

import { AlertCircle, RefreshCw } from 'lucide-react'

interface CampaignErrorProps {
  message?: string
  onRetry?: () => void
}

export function CampaignError({
  message = "We couldn't load your campaigns. Please try again.",
  onRetry,
}: CampaignErrorProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow text-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="rounded-full bg-red-50 p-3">
          <AlertCircle className="h-8 w-8 text-red-500" />
        </div>
        <h3 className="text-lg font-medium">Error Loading Campaigns</h3>
        <p className="text-muted-foreground max-w-md">{message}</p>
        {onRetry && (
          <Button
            onClick={onRetry}
            className="mt-2 bg-blue-600 hover:bg-blue-700"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        )}
      </div>
    </div>
  )
}
