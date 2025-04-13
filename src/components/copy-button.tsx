import { useState } from 'react'
import { Button } from './ui/button'
import { CheckCircle, Copy } from 'lucide-react'

type CopyButtonProps = {
  value: string
  text?: string
}
export function CopyButton({ value, text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (_err) {
      console.error('Failed to copy to clipboard', _err)
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => copyToClipboard(value)}
      className="h-8 w-8 p-0"
    >
      {copied ? (
        <CheckCircle className="h-4 w-4 text-green-600" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
      {text && <span className="sr-only">Copy transaction hash</span>}
    </Button>
  )
}
