import { getCookie } from 'cookies-next/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  /* const value = await getCookie('isWalletConnected', { cookies })
  const isWalletConnected = value === 'true'

  if (!isWalletConnected) {
    redirect('/')
  } */

  return <>{children}</>
}
