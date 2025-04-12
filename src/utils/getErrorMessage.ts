export function getErrorMessage(
  error: Error | unknown,
  defaultMessage = 'An error occurred',
) {
  if (error instanceof Error) {
    return error.message
  }

  return defaultMessage
}
