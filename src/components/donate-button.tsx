'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { toast } from 'react-toastify'

interface DonateButtonProps {
  campaignId: string | number
  defaultCurrency?: string
}

export function DonateButton({ campaignId }: DonateButtonProps) {
  const [donationAmount, setDonationAmount] = useState('0.1')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleDonate = () => {
    toast.success(
      `Doação de ${donationAmount} POL para a campanha ${campaignId} enviada com sucesso!`,
    )
    setIsDialogOpen(false)
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">Doar Agora</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Fazer uma doação</DialogTitle>
          <DialogDescription>
            Escolha o valor que deseja doar para esta campanha.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Valor
            </Label>
            <Input
              id="amount"
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              className="col-span-3"
              step="0.01"
              min="0.01"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleDonate}>
            Confirmar Doação
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
