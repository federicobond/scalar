export function getResponseDotColor(statusCode: number): string {
  if (statusCode >= 200 && statusCode < 300) {
    return 'var(--scalar-color-green)'
  }
  if (statusCode >= 300 && statusCode < 400) {
    return 'var(--scalar-color-yellow)'
  }
  if (statusCode >= 400 && statusCode < 500) {
    return 'var(--scalar-color-orange)'
  }
  if (statusCode >= 500 && statusCode < 600) {
    return 'var(--scalar-color-red)'
  }
  return 'var(--scalar-color-blue)'
}
