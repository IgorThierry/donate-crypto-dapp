import Link from 'next/link'
import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { TabUserCampaigns } from './tab-user-campaigns'
import { TabRecentCampaings } from './tab-recent-campaigns'

export default function DashboardPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Campaign Dashboard</h1>
          <Link href="/campaigns/create">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="mr-2 h-4 w-4" /> Create Campaign
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="recent" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="recent">Recent Campaigns</TabsTrigger>
            <TabsTrigger value="my-campaigns">My Campaigns</TabsTrigger>
          </TabsList>

          <TabRecentCampaings />
          <TabUserCampaigns />
        </Tabs>
      </div>
    </div>
  )
}
