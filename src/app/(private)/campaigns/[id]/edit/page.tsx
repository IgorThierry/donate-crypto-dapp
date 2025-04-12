'use client'

import type React from 'react'

import { useState, useEffect, FormEvent } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Loader2 } from 'lucide-react'

import { userCampaigns } from '@/utils/mocks'
import { CampaignForm } from '@/components/campaign-form'
import { toast } from 'react-toastify'

// Mock function to fetch campaign data
const fetchCampaign = async (id: string) => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const campaign = userCampaigns.find((campaign) => campaign.id === Number(id))

  return campaign || null
}

export default function EditCampaign() {
  const params = useParams()
  const router = useRouter()
  const campaignId = params.id as string

  const [isLoading, setIsLoading] = useState(true)

  const [error, setError] = useState<string | null>(null)

  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleCancel() {
    router.push('/dashboard')
  }

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    videoUrl: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('Campaign edited:', formData)
    setIsSubmitting(false)
    toast.success('Campaign edited successfully!')
  }

  useEffect(() => {
    const loadCampaign = async () => {
      try {
        const campaign = await fetchCampaign(campaignId)
        if (campaign) {
          setFormData({
            title: campaign.title,
            description: campaign.description,
            imageUrl: campaign.image_url || '',
            videoUrl: campaign.video_url || '',
          })
        } else {
          setError('Campaign not found')
        }
      } catch (err) {
        setError('Failed to load campaign')
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    loadCampaign()
  }, [campaignId])

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

  if (error) {
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
            <p className="text-gray-700 mb-6">{error}</p>
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
