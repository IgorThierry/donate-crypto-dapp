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

import { Loader2 } from 'lucide-react'

type WithdrawButtonProps = {
  isWithdrawing: boolean
  isDialogOpen: boolean
  isDisabled?: boolean
  setIsDialogOpen: (open: boolean) => void
  handleWithdraw: () => void
}

export function WithdrawButton({
  isDialogOpen,
  isWithdrawing,
  isDisabled,
  setIsDialogOpen,
  handleWithdraw,
}: WithdrawButtonProps) {
  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={(open) => {
        if (!isWithdrawing) {
          setIsDialogOpen(open)
        }
      }}
    >
      <DialogTrigger asChild>
        <Button className="w-full" variant="tertiary" disabled={isDisabled}>
          Withdraw
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            <span>
              You are about to make a withdrawal, after that the campaign will
              be closed.
            </span>
            <span className="block">Withdrawal fee: 1% of the amount</span>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            type="submit"
            onClick={handleWithdraw}
            disabled={isWithdrawing}
          >
            {isWithdrawing ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              'Confirm Withdrawal'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
