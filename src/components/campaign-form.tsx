'use client'

import { FormEvent } from 'react'

export type CampaignFormData = {
  title: string
  description: string
  imageUrl?: string
  videoUrl?: string
}

type CampaignFormProps = {
  isEditing?: boolean
  formData: CampaignFormData
  isSubmitting?: boolean
  onCancel: () => void
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  onSubmit: (e: FormEvent) => Promise<void>
}

export function CampaignForm({
  formData,
  isEditing = false,
  isSubmitting = false,
  onCancel,
  onSubmit,
  onChange,
}: CampaignFormProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        {isEditing ? 'Edit Campaign' : 'Create Campaign'}
      </h1>

      <div className="mb-8 space-y-2 text-gray-600">
        <p>
          Fill in the fields to {isEditing ? 'update your' : 'include your'}{' '}
          campaign on the platform.
        </p>
        <p>
          {isEditing
            ? 'Your changes will be reflected immediately after saving.'
            : 'After registration, you will receive a link to share it and receive donations.'}
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Campaign Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={onChange}
            maxLength={90}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your campaign title"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            maxLength={250}
            onChange={onChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Describe your campaign in detail"
          />
        </div>

        <div>
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Image URL
          </label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={onChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <label
            htmlFor="videoUrl"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Video URL
          </label>
          <input
            type="url"
            id="videoUrl"
            name="videoUrl"
            value={formData.videoUrl}
            onChange={onChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="https://youtube.com/watch?v=example"
          />
        </div>

        <div className="pt-4 flex justify-between">
          <button
            onClick={onCancel}
            type="button"
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70"
          >
            {isSubmitting ? 'Saving...' : 'Save Campaign'}
          </button>
        </div>
      </form>
    </div>
  )
}
