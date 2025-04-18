'use client'

import type React from 'react'
import { useEffect, useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
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
import { getStorageKey } from '@/utils/getStorageKey'
import { getCookie } from 'cookies-next/client'

const initialFormData = {
  title: '',
  description: '',
  imageUrl: '',
  videoUrl: '',
}

export default function CreateCampaign() {
  const { account } = useWallet()
  const router = useRouter()

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
      const { transactionHash } = await provider.addCampaign(formData)

      const newCampaignId = await provider.getLastCampaignId()

      setSuccess({
        transactionHash,
        newCampaignId,
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
    const cookieAccount = getCookie(getStorageKey('account')) || null
    if (!account && !cookieAccount) {
      router.push('/dashboard')
      toast.info('Please connect your wallet')
    }
  }, [account, router])

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
            newCampaignId={success.newCampaignId}
            transactionHash={success.transactionHash}
          />
        )}

        <CampaignForm
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
