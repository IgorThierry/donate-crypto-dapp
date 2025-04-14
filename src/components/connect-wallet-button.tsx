'use client'

import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useWallet } from '@/contexts/wallet-context'
import { getErrorMessage } from '@/utils/getErrorMessage'
import { toast } from 'react-toastify'
import Image from 'next/image'

type ConnectButtonProps = {
  size?: 'sm' | 'lg' | 'default' | 'icon'
}

export function ConnectButton({ size }: ConnectButtonProps) {
  const { connectWallet, isConnecting } = useWallet()

  const handleConnectWallet = async () => {
    try {
      await connectWallet()
    } catch (err) {
      const errorMessage = getErrorMessage(err)
      toast.error(errorMessage)
    }
  }

  return (
    <Button
      size={size}
      onClick={handleConnectWallet}
      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
    >
      <Image src="/metamask.svg" width="32" height="32" alt="MetaMask" />
      {isConnecting ? (
        <Loader2 className="animate-spin" />
      ) : (
        <span>Conectar Carteira</span>
      )}
    </Button>
  )
}
