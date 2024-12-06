import { AuthDynamic } from '@universal-packages/authentication'
import { Session } from '@universal-packages/express-session'
import { RenderSessionsPayload, TrpcDefaultAuthenticationModuleDynamicNames } from '@universal-packages/trpc-authentication'

@AuthDynamic<TrpcDefaultAuthenticationModuleDynamicNames>('render-sessions')
export default class RenderSessionsDynamic {
  public async perform(payload: RenderSessionsPayload<any, { session: Session }>): Promise<Record<string, any>[]> {
    const session = payload.context.session

    return Object.values(await session.activeSessions()).map((session) => {
      return {
        id: session.id,
        lastActive: session.lastAccessed,
        ip: session.lastIp,
        userAgent: session.userAgent
      }
    })
  }
}
