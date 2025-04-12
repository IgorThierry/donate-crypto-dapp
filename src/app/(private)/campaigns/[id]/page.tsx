'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Heart,
  Share2,
  Users,
} from 'lucide-react'
import { useParams } from 'next/navigation'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
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
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

// Campaign data interface
interface Campaign {
  id: number
  author: string // Representa o tipo 'address' em Solidity
  title: string
  description: string
  videoUrl: string
  imageUrl: string
  balance: string // Representa o tipo 'uint256' em Solidity
  supporters: number // Representa o tipo 'uint256' em Solidity
  active: boolean
  createdAt: number // Timestamp
}

export default function CampaignDetailsPage() {
  const [donationAmount, setDonationAmount] = useState('0.1')
  const [currency, setCurrency] = useState('ETH')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // In a real scenario, you would fetch campaign data based on the ID
  const params = useParams()
  const campaignId = params.id // isso será uma string (ou undefined)

  // Example campaign with YouTube video
  const campaign: Campaign = {
    id: 101,
    author: '0x515056E32F2D8836E911D3aCA8c6b3fF1c75d886',
    title: 'Local Food Bank Support Initiative',
    description:
      'Help us provide meals to families in need in our local community.',
    balance: '0.5 POL',
    imageUrl: '/placeholder.svg?height=450&width=800',
    active: true,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example YouTube video
    supporters: 28,
    createdAt: Date.now(),
  }

  // Extract value and currency from balance
  const [balanceValue, balanceCurrency] = campaign.balance.split(' ')

  const handleDonate = () => {
    // Here you would implement the donation logic
    alert(`Donation of ${donationAmount} ${currency} sent successfully!`)
    setIsDialogOpen(false)
  }

  // Format date to be more readable
  const formatDate = (dateTimeStamp: number) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    return new Date(dateTimeStamp).toLocaleDateString('en-US', options)
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumb navigation */}
        <div className="mb-6">
          <Link
            href="/dashboard"
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to dashboard
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Campaign header for mobile */}
            <div className="lg:hidden">
              <h1 className="text-3xl font-bold mb-2">{campaign.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant={campaign.active ? 'default' : 'outline'}>
                  {campaign.active ? 'Active' : 'Inactive'}
                </Badge>
              </div>
            </div>

            {/* Campaign image with reduced height (16:6 aspect ratio) */}
            <div className="relative rounded-lg overflow-hidden">
              {campaign.videoUrl ? (
                <div className="aspect-video">
                  <iframe
                    src={campaign.videoUrl}
                    className="absolute top-0 left-0 w-full h-full"
                    allowFullScreen
                    title="Campaign video"
                  ></iframe>
                </div>
              ) : (
                <div className="aspect-video">
                  <Image
                    src={campaign.imageUrl || '/placeholder.svg'}
                    alt={campaign.title}
                    className="object-cover w-full"
                    fill
                    priority
                  />
                </div>
              )}
            </div>

            {/* Campaign header for desktop */}
            <div className="hidden lg:block">
              <h1 className="text-3xl font-bold mb-2">{campaign.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant={campaign.active ? 'default' : 'outline'}>
                  {campaign.active ? 'Active' : 'Inactive'}
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  Created on {formatDate(campaign.createdAt)}
                </div>
              </div>
            </div>

            {/* Campaign content tabs */}
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p className="text-lg mb-4">{campaign.description}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Campaign stats card */}
            <Card>
              <CardHeader>
                <CardTitle>Campaign Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Current Balance
                    </h3>
                    <p className="text-3xl font-bold">{campaign.balance}</p>
                  </div>

                  <Separator />

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Status
                      </h3>
                      <Badge
                        variant={campaign.active ? 'default' : 'outline'}
                        className="mt-1"
                      >
                        {campaign.active ? 'Active' : 'Inactive'}
                      </Badge>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Created
                      </h3>
                      <p>{formatDate(campaign.createdAt)}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Donors
                      </h3>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{campaign.supporters || 0}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                {/* Donation dialog */}
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full">Donate Now</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Make a Donation</DialogTitle>
                      <DialogDescription>
                        Choose the amount you would like to donate to this
                        campaign.
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
                          step="0.01"
                          min="0.01"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="currency" className="text-right">
                          Currency
                        </Label>
                        <Select value={currency} onValueChange={setCurrency}>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
                            <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
                            <SelectItem value="USDT">Tether (USDT)</SelectItem>
                            <SelectItem value="USDC">
                              USD Coin (USDC)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" onClick={handleDonate}>
                        Confirm Donation
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                {/* Action buttons */}
                <div className="flex gap-2 w-full">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="flex-1"
                        >
                          <Heart className="h-4 w-4" />
                          <span className="sr-only">Favorite</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add to favorites</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="flex-1"
                        >
                          <Share2 className="h-4 w-4" />
                          <span className="sr-only">Share</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Share campaign</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="flex-1"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">View on blockchain</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View on blockchain</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </CardFooter>
            </Card>

            {/* Wallet address card */}
            {campaign.author && (
              <Card>
                <CardHeader>
                  <CardTitle>Wallet Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <code className="bg-muted p-2 rounded text-sm overflow-hidden text-ellipsis">
                      {campaign.author}
                    </code>
                    <Button variant="ghost" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* How it works card */}
            <Card>
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4 list-decimal list-inside">
                  <li>Choose the amount you want to donate</li>
                  <li>Connect your cryptocurrency wallet</li>
                  <li>Confirm the transaction</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
