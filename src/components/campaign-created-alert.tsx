import { useState } from 'react'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { Button } from './ui/button'
import { toast } from 'react-toastify'
import { CheckCircle, Copy } from 'lucide-react'

export type CampaignCreatedAlertProps = {
  transactionHash: string
  newCampaignId: number
}

export function CampaignCreatedAlert({
  transactionHash,
  newCampaignId,
}: CampaignCreatedAlertProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (_err) {
      toast.error('Failed to copy to clipboard')
    }
  }
  return (
    <Alert className="mb-6 bg-green-50 border-green-200">
      <AlertTitle className="text-green-800 font-medium">
        Campaign created successfully!
      </AlertTitle>
      <AlertDescription className="mt-2">
        <div>
          <strong className="text-black">Campaign ID: {newCampaignId}</strong>
        </div>
        <div className="flex items-center justify-between bg-white p-2 rounded border mt-1">
          <code className="text-sm text-gray-800 font-mono overflow-x-auto max-w-[calc(100%-40px)]">
            {transactionHash}
          </code>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => copyToClipboard(transactionHash)}
            className="ml-2 h-8 w-8 p-0"
          >
            {copied ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            <span className="sr-only">Copy transaction hash</span>
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  )
}
