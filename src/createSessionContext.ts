import * as trpcExpress from '@trpc/server/adapters/express'
import '@universal-packages/express-session'
import { Session } from '@universal-packages/express-session'

export function createSessionContext({ req }: trpcExpress.CreateExpressContextOptions) {
  return {
    session: req.session as Session
  }
}
