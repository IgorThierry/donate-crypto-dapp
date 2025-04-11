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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface DonateButtonProps {
  campaignId: string | number
  defaultCurrency?: string
}

export function DonateButton({
  campaignId,
  defaultCurrency = 'ETH',
}: DonateButtonProps) {
  const [donationAmount, setDonationAmount] = useState('0.1')
  const [currency, setCurrency] = useState(defaultCurrency)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleDonate = () => {
    // Aqui você implementaria a lógica de doação
    alert(
      `Doação de ${donationAmount} ${currency} para a campanha ${campaignId} enviada com sucesso!`,
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
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="currency" className="text-right">
              Moeda
            </Label>
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Selecione a moeda" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
                <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
                <SelectItem value="USDT">Tether (USDT)</SelectItem>
                <SelectItem value="USDC">USD Coin (USDC)</SelectItem>
              </SelectContent>
            </Select>
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
