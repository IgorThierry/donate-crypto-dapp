export const publicRoutes = [
  { path: '/', redirectIfAuthenticated: false },
  { path: '/about', redirectIfAuthenticated: false },
]

export const REDIRECT_WHEN_NOT_AUTHENTICATED = '/'
