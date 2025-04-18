'use client'

import Image from 'next/image'
import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { TabsContent } from '@/components/ui/tabs'

import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { TabRecentCampaingsSkeleton } from './tab-recent-campaigns-skeleton'
import { getErrorMessage } from '@/utils/getErrorMessage'
import { Web3Provider } from '@/services/Web3Provider'
import { Campaign } from '@/_types/contract'
import { Badge } from '@/components/ui/badge'

export function TabRecentCampaings() {
  const [isLoading, setIsLoading] = useState(true)
  const [campaigns, setCampaigns] = useState<Campaign[]>([])
  const [error, setError] = useState<string | null>(null)

  const loadData = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)

      const provider = Web3Provider.getInstance(window.ethereum)
      const data = await provider.getRecentCampaigns()

      setCampaigns(data)
    } catch (error) {
      const errorMessage = getErrorMessage(error)
      toast.error(errorMessage)
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }, [])

  function handleLoadData() {
    loadData()
  }

  useEffect(() => {
    loadData()
  }, [loadData])

  return (
    <TabsContent value="recent">
      {isLoading && <TabRecentCampaingsSkeleton />}
      {!isLoading && error && (
        <div className="text-center py-10 gap-1 flex flex-col items-center">
          <p className="text-lg font-semibold text-red-600">
            Oops! Something went wrong while loading campaigns.
          </p>
          <p className="text-muted-foreground mt-2">{error}</p>
          <Button onClick={handleLoadData}>Try again!</Button>
        </div>
      )}
      {!isLoading && !error && campaigns.length === 0 && (
        <div className="text-center py-10 gap-1 flex flex-col items-center">
          <p className="text-lg font-semibold">
            No campaigns available at the moment.
          </p>
          <p className="text-muted-foreground mt-2">
            Check back later or create a new campaign.
          </p>
          <Button onClick={handleLoadData}>Refresh</Button>
        </div>
      )}
      {!isLoading && !error && campaigns.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => {
            const goal = Number(campaign.goal || '0')
            const balance = Number(campaign.balance)
            const goalReachedPercentage =
              goal > 0 ? Math.min((balance / goal) * 100, 100) : 100

            return (
              <Card key={campaign.id} className="overflow-hidden pt-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={campaign.imageUrl || '/placeholder.svg'}
                    alt={campaign.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{campaign.title}</CardTitle>
                  <CardDescription>
                    <div className="line-clamp-3">{campaign.description}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Current Balance:
                    </span>
                    <span className="font-semibold text-blue-600">
                      {campaign.balance}
                    </span>
                  </div>
                  {goal > 0 && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          Goal:
                        </span>
                        <span className="font-semibold text-blue-600">
                          {goal}
                        </span>
                      </div>
                      <div className="mt-2">
                        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-600"
                            style={{
                              width: `${goalReachedPercentage}%`,
                            }}
                          ></div>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1 text-right">
                          {goalReachedPercentage.toFixed(2)}% of goal reached
                        </div>
                      </div>
                    </>
                  )}

                  <div>
                    <Badge
                      variant={campaign.active ? 'success' : 'destructive'}
                    >
                      {campaign.active ? 'active' : 'inactive'}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href={`/campaigns/${campaign.id}`}>
                    <Button variant="outline">View Details</Button>
                  </Link>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      )}
    </TabsContent>
  )
}
