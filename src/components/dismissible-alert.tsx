'use client'

import * as React from 'react'
import { cva } from 'class-variance-authority'
import { X } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

// Extended variants to include success, warning, and info
const dismissibleAlertVariants = cva('', {
  variants: {
    variant: {
      default: 'bg-card text-card-foreground',
      destructive:
        'text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90',
      success:
        'border-green-500 bg-card text-green-700 [&>svg]:text-green-500 *:data-[slot=alert-description]:text-green-700/90',
      warning:
        'border-yellow-500 bg-card text-yellow-700 [&>svg]:text-yellow-500 *:data-[slot=alert-description]:text-yellow-700/90',
      info: 'border-blue-500 bg-card text-blue-700 [&>svg]:text-blue-500 *:data-[slot=alert-description]:text-blue-700/90',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface DismissibleAlertProps
  extends Omit<React.ComponentProps<'div'>, 'variant'> {
  variant?: 'default' | 'destructive' | 'success' | 'warning' | 'info'
  title?: string
  description?: React.ReactNode
  icon?: React.ReactNode
  onClose?: () => void
}

const DismissibleAlert = React.forwardRef<
  HTMLDivElement,
  DismissibleAlertProps
>(
  (
    {
      className,
      variant = 'default',
      title,
      description,
      icon,
      onClose,
      children,
      ...props
    },
    ref,
  ) => {
    const [isVisible, setIsVisible] = React.useState(true)

    const handleClose = () => {
      setIsVisible(false)
      onClose?.()
    }

    if (!isVisible) {
      return null
    }

    // Only pass the variant to Alert if it's "default" or "destructive"
    const alertVariant =
      variant === 'default' || variant === 'destructive' ? variant : 'default'

    return (
      <Alert
        ref={ref}
        variant={alertVariant}
        className={cn(
          'relative pr-10',
          dismissibleAlertVariants({ variant }),
          className,
        )}
        {...props}
      >
        {icon}
        {title && <AlertTitle>{title}</AlertTitle>}
        {description && <AlertDescription>{description}</AlertDescription>}
        {children}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-6 w-6 rounded-full opacity-70 ring-offset-background transition-opacity hover:opacity-100"
          onClick={handleClose}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </Alert>
    )
  },
)
DismissibleAlert.displayName = 'DismissibleAlert'

export { DismissibleAlert }
