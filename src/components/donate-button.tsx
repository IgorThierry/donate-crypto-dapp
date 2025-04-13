import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Loader2 } from 'lucide-react'

type DonateButtonProps = {
  isDonating: boolean
  isDialogOpen: boolean
  isDisabled?: boolean
  setIsDialogOpen: (open: boolean) => void
  handleDonate: () => void
}

export function DonateButton({
  isDialogOpen,
  isDonating,
  isDisabled,
  setIsDialogOpen,
  handleDonate,
}: DonateButtonProps) {
  const [donationAmount, setDonationAmount] = useState('0.001')

  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={(open) => {
        if (!isDonating) {
          setIsDialogOpen(open)
        }
      }}
    >
      <DialogTrigger asChild>
        <Button className="w-full" disabled={isDisabled}>Donate Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Make a Donation</DialogTitle>
          <DialogDescription>
            Choose the amount you would like to donate to this campaign.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Amount
            </Label>
            <Input
              id="amount"
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              className="col-span-3"
              step="0.001"
              min="0.00001"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleDonate} disabled={isDonating}>
            {isDonating ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              'Confirm Donation'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
