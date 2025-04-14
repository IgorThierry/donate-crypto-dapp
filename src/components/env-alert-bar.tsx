export function EnvAlertBar() {
  const appEnv = process.env.NEXT_PUBLIC_APP_ENV

  if (appEnv === 'PRD') {
    return null
  }

  return (
    <div className="w-full bg-amber-500 text-white p-1 flex items-center justify-center">
      <span className="text-sm">
        You are using the <strong>test</strong> version of the app. (Polygon
        Amoy Testnet)
      </span>
    </div>
  )
}
