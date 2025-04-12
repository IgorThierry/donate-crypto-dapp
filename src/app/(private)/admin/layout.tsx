import { isAdmin } from '@/utils/isAdmin'
import { getCookie } from 'cookies-next/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const value = await getCookie('wallet', { cookies })

  if (!isAdmin(String(value))) {
    redirect('/')
  }

  return <>{children}</>
}
