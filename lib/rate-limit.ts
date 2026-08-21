import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

let limiter: Ratelimit | null | undefined

function getLimiter() {
  if (limiter !== undefined) return limiter

  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    limiter = null
    return limiter
  }

  limiter = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(8, '10 m'),
    analytics: true,
    prefix: 'opv:api',
  })
  return limiter
}

export async function isRateLimited(key: string) {
  const rateLimit = getLimiter()
  if (!rateLimit) return false

  const result = await rateLimit.limit(key)
  return !result.success
}
