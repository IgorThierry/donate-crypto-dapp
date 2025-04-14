'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Heart,
  Loader2,
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

import { Separator } from '@/components/ui/separator'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { toast } from 'react-toastify'
import { Campaign } from '@/_types/contract'
import { Web3Provider } from '@/services/Web3Provider'
import { getErrorMessage } from '@/utils/getErrorMessage'
import { CampaignCreatedAlert } from '@/components/campaign-created-alert'
import { CopyButton } from '@/components/copy-button'
import { DonateButton } from '@/components/donate-button'
import { WithdrawButton } from '@/components/withdraw-button'
import { useWallet } from '@/contexts/wallet-context'

export default function CampaignDetailsPage() {
  const { account } = useWallet()
  const params = useParams()
  const campaignId = params.id as string
  const [isLoading, setIsLoading] = useState(true)
  const [errorOnLoad, setErrorOnLoad] = useState<string | null>(null)
  const [campaign, setCampaign] = useState<Campaign | null>(null)

  const [donationAmount, setDonationAmount] = useState('0.001')

  // donate dialog
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isDonating, setIsDonating] = useState(false)

  // withdraw dialog
  const [isWithdrawDialogOpen, setIsWithdrawDialogOpen] = useState(false)
  const [isWithdrawing, setIsWithdrawing] = useState(false)

  const isCampaignOwner = useMemo(() => {
    if (!campaign || !account) return false
    return campaign.author.toLocaleUpperCase() === account.toLocaleUpperCase()
  }, [campaign, account])

  const fetchCampaignData = useCallback(async () => {
    try {
      setIsLoading(true)
      setErrorOnLoad(null)
      setCampaign(null)
      const provider = Web3Provider.getInstance(window.ethereum)
      const campaign = await provider.campaigns(campaignId)
      if (!campaign) {
        setErrorOnLoad('Campaign not found')
        toast.error('Campaign not found')
        setIsLoading(false)
        return
      }

      setCampaign(campaign)
    } catch (error) {
      const errorMessage = getErrorMessage(error)
      setErrorOnLoad(errorMessage)
      toast.error('Error on loading campaign data')
    } finally {
      setIsLoading(false)
    }
  }, [campaignId, setIsLoading, setErrorOnLoad, setCampaign])

  const handleDonate = async () => {
    try {
      setIsDonating(true)

      const provider = Web3Provider.getInstance(window.ethereum)
      const { transactionHash } = await provider.donate(
        campaignId,
        donationAmount,
      )

      setIsDialogOpen(false)
      toast.success(
        <CampaignCreatedAlert
          message="Donation successful!"
          transactionHash={transactionHash}
        />,
        {
          autoClose: false,
        },
      )
      setDonationAmount('0.001')
      fetchCampaignData()
    } catch (error) {
      const errorMessage = getErrorMessage(error)
      toast.error(errorMessage)
    } finally {
      setIsDonating(false)
    }
  }

  const handleWithdraw = async () => {
    try {
      setIsWithdrawing(true)

      const provider = Web3Provider.getInstance(window.ethereum)
      const { transactionHash } = await provider.withdraw(campaignId)

      setIsWithdrawDialogOpen(false)
      toast.success(
        <CampaignCreatedAlert
          message="Withdraw successful!"
          transactionHash={transactionHash}
        />,
        {
          autoClose: false,
        },
      )

      fetchCampaignData()
    } catch (error) {
      setIsWithdrawDialogOpen(false)
      const errorMessage = getErrorMessage(error)
      toast.error(errorMessage)
    } finally {
      setIsWithdrawing(false)
    }
  }

  useEffect(() => {
    fetchCampaignData()
  }, [fetchCampaignData])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          <p className="mt-2 text-gray-600">Loading campaign...</p>
        </div>
      </div>
    )
  }

  if (errorOnLoad) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/dashboard"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              <ArrowLeft className="h-5 w-5 mr-1" />
              Back to Dashboard
            </Link>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 md:p-8 text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
            <p className="text-gray-700 mb-6">{errorOnLoad}</p>
            <Link href="/dashboard">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
                Return to Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (!isLoading && campaign?.id === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/dashboard"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              <ArrowLeft className="h-5 w-5 mr-1" />
              Back to Dashboard
            </Link>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 md:p-8 text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
            <p className="text-gray-700 mb-6">Campaign not found</p>
            <Link href="/dashboard">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
                Return to Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
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
              <h1 className="text-3xl font-bold mb-2">{campaign?.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant={campaign?.active ? 'success' : 'destructive'}>
                  {campaign?.active ? 'Active' : 'Inactive'}
                </Badge>
              </div>
            </div>

            {/* Campaign image with reduced height (16:6 aspect ratio) */}
            <div className="relative rounded-lg overflow-hidden">
              {campaign?.videoUrl ? (
                <div className="aspect-video">
                  <iframe
                    src={campaign.videoUrl}
                    className="absolute top-0 left-0 w-full h-full"
                    allowFullScreen
                    title="Campaign video"
                  ></iframe>
                </div>
              ) : (
                <div className="aspect-video relative">
                  <Image
                    src={campaign?.imageUrl || '/placeholder.svg'}
                    alt={campaign?.title || 'Campaign image'}
                    className="object-cover w-full"
                    fill
                    priority
                  />
                </div>
              )}
            </div>

            {/* Campaign header for desktop */}
            <div className="hidden lg:block">
              <h1 className="text-3xl font-bold mb-2">{campaign?.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant={campaign?.active ? 'success' : 'destructive'}>
                  {campaign?.active ? 'Active' : 'Inactive'}
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  Created on {campaign?.createdAt}
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
                  <p className="text-lg mb-4">{campaign?.description}</p>
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
                    <p className="text-3xl font-bold">
                      {campaign?.balance} POL
                    </p>
                  </div>

                  <Separator />

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Status
                      </h3>
                      <Badge
                        variant={campaign?.active ? 'success' : 'destructive'}
                        className="mt-1"
                      >
                        {campaign?.active ? 'Active' : 'Inactive'}
                      </Badge>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Donors
                      </h3>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{campaign?.supporters || 0}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Created
                    </h3>
                    <p>{campaign?.createdAt}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                {/* Donation dialog */}
                <DonateButton
                  isDisabled={!campaign?.active}
                  isDialogOpen={isDialogOpen}
                  isDonating={isDonating}
                  handleDonate={handleDonate}
                  setIsDialogOpen={setIsDialogOpen}
                />
                {isCampaignOwner && (
                  <WithdrawButton
                    isDisabled={!campaign?.active}
                    isDialogOpen={isWithdrawDialogOpen}
                    isWithdrawing={isWithdrawing}
                    handleWithdraw={handleWithdraw}
                    setIsDialogOpen={setIsWithdrawDialogOpen}
                  />
                )}

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
            {campaign?.author && (
              <Card>
                <CardHeader>
                  <CardTitle>Author Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <code className="bg-muted p-2 rounded text-sm overflow-hidden text-ellipsis">
                      {campaign.author}
                    </code>
                    <CopyButton value={campaign.author} />
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
