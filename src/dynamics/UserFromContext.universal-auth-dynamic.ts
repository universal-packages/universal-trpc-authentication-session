import { AuthDynamic, Authentication } from '@universal-packages/authentication'
import { Session } from '@universal-packages/express-session'
import { TrpcDefaultAuthenticationModuleDynamicNames, UserFromContextPayload } from '@universal-packages/trpc-authentication'

@AuthDynamic<TrpcDefaultAuthenticationModuleDynamicNames>('user-from-context')
export default class UserFromContextDynamic {
  public async perform(payload: UserFromContextPayload<{ session: Session }>, authentication: Authentication): Promise<Record<string, any>> {
    const { context } = payload
    const { session } = context

    if (session.authenticated) {
      return await authentication.performDynamic('user-from-id', { id: session.userId })
    }
  }
}
