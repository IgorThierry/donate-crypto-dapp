export function isAdmin(address: string): boolean {
  const adminAddress = process.env.NEXT_PUBLIC_ADMIN_ADDRESS || ''
  return address.toLowerCase() === adminAddress.toLowerCase()
}