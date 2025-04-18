'use client'

import type React from 'react'

import { type FormEvent, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Pencil, Eye } from 'lucide-react'

export type CampaignFormData = {
  title: string
  description: string
  imageUrl: string
  videoUrl: string
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
  const [activeTab, setActiveTab] = useState<string>('edit')

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
            Description{' '}
            <span className="text-xs text-gray-500">(Supports Markdown)</span>
          </label>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 mb-2">
              <TabsTrigger value="edit" className="flex items-center gap-1">
                <Pencil className="h-4 w-4" />
                <span>Edit</span>
              </TabsTrigger>
              <TabsTrigger value="preview" className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>Preview</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="edit" className="mt-0">
              <textarea
                id="description"
                name="description"
                value={formData.description}
                maxLength={2000}
                onChange={onChange}
                required
                rows={8}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe your campaign in detail using Markdown"
              />
              <div className="mt-2 text-xs text-gray-500">
                <p>Markdown tips:</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    <code># Heading 1</code>, <code>## Heading 2</code> for
                    headings
                  </li>
                  <li>
                    <code>**bold**</code> for <strong>bold text</strong>
                  </li>
                  <li>
                    <code>*italic*</code> for <em>italic text</em>
                  </li>
                  <li>
                    <code>[Link text](https://example.com)</code> for links
                  </li>
                  <li>
                    <code>- Item</code> for bullet lists
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="preview" className="mt-0">
              <div className="prose prose-blue max-w-none border border-gray-300 rounded-md p-4 min-h-[12rem] bg-gray-50">
                {formData.description ? (
                  <ReactMarkdown>{formData.description}</ReactMarkdown>
                ) : (
                  <p className="text-gray-400 italic">
                    Preview will appear here...
                  </p>
                )}
              </div>
            </TabsContent>
          </Tabs>
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
