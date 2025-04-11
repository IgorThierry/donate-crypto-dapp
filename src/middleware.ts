import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { publicRoutes, REDIRECT_WHEN_NOT_AUTHENTICATED } from '@/config/routes'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const publicRoute = publicRoutes.find((route) => route.path === path)
  const authToken = request.cookies.get('isWalletConnected')

  if (!authToken && publicRoute) {
    return NextResponse.next()
  }

  if (!authToken && !publicRoute) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED
    return NextResponse.redirect(redirectUrl)
  }

  if (authToken && publicRoute && publicRoute.redirectIfAuthenticated) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = '/'
    return NextResponse.redirect(redirectUrl)
  }

  if (authToken && !publicRoute) {
    if (authToken.value !== 'true') {
      const redirectUrl = request.nextUrl.clone()
      redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED
      const response = NextResponse.redirect(redirectUrl)
      response.cookies.delete('isWalletConnected')
      return response
    }
  }

  return NextResponse.next()
}

export const config = {
  // matcher: [
  //   /*
  //    * Match all request paths except for the ones starting with:
  //    * - api (API routes)
  //    * - _next/static (static files)
  //    * - _next/image (image optimization files)
  //    * - favicon.ico, sitemap.xml, robots.txt (metadata files)
  //    */
  //   '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  // ],

  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|json|woff2?|ttf)).*)',
  ],
}
