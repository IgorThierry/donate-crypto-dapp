export function isValidUrl(url: string) {
  const urlPattern = /^(https):\/\/[^ "]+$/
  return urlPattern.test(url)
}
