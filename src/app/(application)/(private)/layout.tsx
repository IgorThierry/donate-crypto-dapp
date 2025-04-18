import { getStorageKey } from '@/utils/getStorageKey'
import { getCookie } from 'cookies-next/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const value = (await getCookie(getStorageKey('account'), { cookies })) || null

  if (!value) {
    redirect('/dashboard?needLogin=true')
  }

  return <>{children}</>
}
