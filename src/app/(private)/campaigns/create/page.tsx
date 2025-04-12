'use client'

import type React from 'react'
import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { CampaignForm } from '@/components/campaign-form'
import { toast } from 'react-toastify'
import { isValidUrl } from '@/utils/isValidURL'

export default function CreateCampaign() {
  const router = useRouter()

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

    if (!formData.videoUrl && !formData.imageUrl) {
      toast.error('At least one of video or image URL is required')
      setIsSubmitting(false)
      return
    }

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

    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('Campaign created:', formData)
    setIsSubmitting(false)
    toast.success('Campaign created successfully!')
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
