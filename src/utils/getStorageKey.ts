export const STORAGE_KEY_PREFIX = 'donate-crypto@'

export function getStorageKey(key: string) {
  return `${STORAGE_KEY_PREFIX}${key}`
}
