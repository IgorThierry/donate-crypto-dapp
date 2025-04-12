'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Edit, ExternalLink } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TabsContent } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'

import { userCampaigns } from '@/utils/mocks'
import { useWallet } from '@/contexts/wallet-context'

export function TabUserCampaigns() {
  const [myCampaigns, setMyCampaigns] = useState(userCampaigns)
  const { isConnected } = useWallet()

  return (
    <TabsContent value="my-campaigns">
      {isConnected ? (
        myCampaigns.length > 0 ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Your Campaigns</h2>
              <p className="text-sm text-muted-foreground">
                Showing {myCampaigns.length} campaign
                {myCampaigns.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Campaign
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Balance
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Created
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {myCampaigns.map((campaign) => (
                      <tr key={campaign.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 relative">
                              <Image
                                src={campaign.image_url || '/placeholder.svg'}
                                alt={campaign.title}
                                fill
                                className="rounded-md object-cover"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {campaign.title}
                              </div>
                              <div className="text-sm text-gray-500 line-clamp-1">
                                {campaign.description}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-blue-600">
                            {campaign.balance}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge
                            variant={
                              campaign.status === 'active'
                                ? 'default'
                                : 'outline'
                            }
                            className="bg-green-100 text-green-800 hover:bg-green-100"
                          >
                            {campaign.status === 'active'
                              ? 'Active'
                              : campaign.status}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {campaign.created_at}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <Link href={`/campaigns/${campaign.id}`}>
                              <Button variant="ghost" size="sm">
                                <ExternalLink className="h-4 w-4" />
                                <span className="sr-only">View</span>
                              </Button>
                            </Link>
                            <Link href={`/campaigns/${campaign.id}/edit`}>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                              </Button>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-4">Campaign Analytics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-600 mb-1">Total Raised</p>
                  <p className="text-2xl font-bold">5.08 ETH</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-600 mb-1">
                    Active Campaigns
                  </p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-purple-600 mb-1">Total Donors</p>
                  <p className="text-2xl font-bold">42</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow text-center py-8">
            <p className="text-muted-foreground mb-4">
              You haven't created any campaigns yet.
            </p>
            <Link href="/campaigns/create">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Create Your First Campaign
              </Button>
            </Link>
          </div>
        )
      ) : (
        <div className="bg-white p-6 rounded-lg shadow text-center py-8">
          <p className="text-muted-foreground mb-4">
            Please connect your wallet to view your campaigns.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Connect Wallet
          </Button>
        </div>
      )}
    </TabsContent>
  )
}
