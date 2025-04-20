'use client'

import type React from 'react'
import { useEffect, useState, type FormEvent } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { CampaignForm } from '@/components/campaign-form'
import { toast } from 'react-toastify'
import { isValidUrl } from '@/utils/isValidURL'
import { Web3Provider } from '@/services/Web3Provider'
import { getErrorMessage } from '@/utils/getErrorMessage'

import {
  CampaignCreatedAlert,
  CampaignCreatedAlertProps,
} from '@/components/campaign-created-alert'
import { useWallet } from '@/contexts/wallet-context'
import { getCookie } from 'cookies-next/client'
import { getStorageKey } from '@/utils/getStorageKey'

const initialFormData = {
  title: '',
  description: '',
  imageUrl: '',
  videoUrl: '',
  goal: '',
}

export default function EditCampaign() {
  const { account } = useWallet()
  const params = useParams()
  const router = useRouter()
  const campaignId = params.id as string

  const [isLoading, setIsLoading] = useState(true)
  const [errorOnLoad, setErrorOnLoad] = useState<string | null>(null)

  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [success, setSuccess] = useState<CampaignCreatedAlertProps | null>(null)

  function handleCancel() {
    router.push('/dashboard')
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    try {
      setIsSubmitting(true)

      const isVideoUrlValid = isValidUrl(formData.videoUrl)
      const isImageUrlValid = isValidUrl(formData.imageUrl)
      if (formData.videoUrl && !isVideoUrlValid) {
        toast.error('Invalid video URL')
        setIsSubmitting(false)
        return
      }
      if (formData.imageUrl && !isImageUrlValid) {
        toast.error('Invalid image URL')
        setIsSubmitting(false)
        return
      }
      if (!formData.title || !formData.description) {
        toast.error('Title and description are required')
        setIsSubmitting(false)
        return
      }

      const provider = Web3Provider.getInstance(window.ethereum)
      const { transactionHash } = await provider.editCampaign(
        campaignId,
        formData,
      )

      setSuccess({
        transactionHash,
        newCampaignId: Number(campaignId),
      })

      setFormData(initialFormData)
      toast.success('Campaign created successfully!')
    } catch (error) {
      console.log(error)
      const errorMessage = getErrorMessage(error)
      toast.error(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    async function fetchCampaignData() {
      try {
        setErrorOnLoad(null)
        const provider = Web3Provider.getInstance(window.ethereum)
        const campaign = await provider.campaigns(campaignId)
        if (!campaign) {
          setErrorOnLoad('Campaign not found')
          toast.error('Campaign not found')
          setIsLoading(false)
          return
        }

        const { title, description, imageUrl, videoUrl, author } = campaign

        const isCampaignOwner =
          author.toLocaleUpperCase() === account?.toLocaleUpperCase()

        if (!isCampaignOwner) {
          setErrorOnLoad('You are not the author of this campaign')
          toast.error('You are not the author of this campaign')
          setIsLoading(false)
          return
        }

        setFormData({
          title,
          description,
          imageUrl: imageUrl || '',
          videoUrl: videoUrl || '',
          goal: '',
        })
      } catch (error) {
        const errorMessage = getErrorMessage(error)
        setErrorOnLoad(errorMessage)
        toast.error('Error on loading campaign data')
      } finally {
        setIsLoading(false)
      }
    }

    const cookieAccount = getCookie(getStorageKey('account')) || null
    if (!account && !cookieAccount) {
      router.push('/dashboard')
      toast.info('Please connect your wallet')
    }

    if (account) {
      fetchCampaignData()
    }
  }, [campaignId, account, router])

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

        {success !== null && (
          <CampaignCreatedAlert
            message="Campaign edited successfully!"
            newCampaignId={success.newCampaignId}
            transactionHash={success.transactionHash}
          />
        )}

        <CampaignForm
          isEditing
          formData={formData}
          isSubmitting={isSubmitting}
          onChange={handleChange}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}
