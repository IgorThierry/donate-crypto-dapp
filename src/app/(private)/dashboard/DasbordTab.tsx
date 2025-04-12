'use client'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TabUserCampaigns } from './tab-user-campaigns'
import { TabRecentCampaings } from './tab-recent-campaigns'

import { useState } from 'react'
import { setCookie } from 'cookies-next/client'

export type TabOption = 'recent' | 'my-campaigns'

type DashboardTabProps = {
  initialTab: TabOption
}

export function DashboardTab({ initialTab = 'recent' }: DashboardTabProps) {
  const [activeTab, setActiveTab] = useState<TabOption>(initialTab)

  function handleTabChange(value: string) {
    setCookie('activeTab', value, { maxAge: 60 * 60 * 24 }) // 1 day
    setActiveTab(value as TabOption)
  }

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-8">
      <TabsList className="mb-4">
        <TabsTrigger value="recent">Recent Campaigns</TabsTrigger>
        <TabsTrigger value="my-campaigns">My Campaigns</TabsTrigger>
      </TabsList>

      <TabRecentCampaings />
      <TabUserCampaigns />
    </Tabs>
  )
}
