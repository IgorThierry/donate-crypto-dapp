import { Alert, AlertDescription, AlertTitle } from './ui/alert'

import { CopyButton } from './copy-button'

export type CampaignCreatedAlertProps = {
  transactionHash: string
  newCampaignId?: number
  message?: string
}

export function CampaignCreatedAlert({
  message = 'Campaign created successfully!',
  transactionHash,
  newCampaignId,
}: CampaignCreatedAlertProps) {
  return (
    <Alert className="mb-6 bg-green-50 border-green-200">
      <AlertTitle className="text-green-800 font-medium">{message}</AlertTitle>
      <AlertDescription className="mt-2">
        {newCampaignId && (
          <div>
            <strong className="text-black">Campaign ID: {newCampaignId}</strong>
          </div>
        )}
        <div className="flex items-center justify-between bg-white p-2 rounded border mt-1">
          <code className="text-sm text-gray-800 font-mono overflow-x-auto max-w-[calc(100%-40px)]">
            {transactionHash}
          </code>
          <CopyButton value={transactionHash} text="Copy transaction hash" />
        </div>
      </AlertDescription>
    </Alert>
  )
}
