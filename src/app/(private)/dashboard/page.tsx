import Link from 'next/link'
import { cookies } from 'next/headers'
import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { DashboardTab, TabOption } from './DasbordTab'

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const activeTabCookie = cookieStore.get('activeTab')?.value || 'recent'

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

        <DashboardTab initialTab={activeTabCookie as TabOption} />
      </div>
    </div>
  )
}
