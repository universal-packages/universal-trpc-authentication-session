import { AuthDynamic } from '@universal-packages/authentication'
import { Session } from '@universal-packages/express-session'
import { TrpcDefaultAuthenticationModuleDynamicNames, UnsetSessionPayload } from '@universal-packages/trpc-authentication'

@AuthDynamic<TrpcDefaultAuthenticationModuleDynamicNames>('unset-session')
export default class UnsetSessionDynamic {
  public async perform(payload: UnsetSessionPayload<any, { session: Session }>): Promise<void> {
    const { context, sessionId } = payload
    const { session } = context

    if (sessionId) {
      const sessions = await session.activeSessions()
      const sessionToken = Object.keys(sessions).find((sessionToken) => sessions[sessionToken].id === sessionId)

      if (sessionToken) await session.logOut(sessionToken)
    } else {
      await session.logOut()
    }
  }
}
