/** True when `origin` matches an allowed origin exactly or a "*.example.com" subdomain pattern. */
export function isAllowedOrigin(origin: string, allowed: string[]): boolean {
  let hostname = ''
  try {
    hostname = new URL(origin).hostname
  } catch {
    return false
  }
  return allowed.some((rule) =>
    rule.startsWith('*.') ? hostname.endsWith(rule.slice(1)) : rule === origin,
  )
}
