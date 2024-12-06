import { AuthDynamic } from '@universal-packages/authentication'
import { Session } from '@universal-packages/express-session'
import { SetSessionPayload, TrpcDefaultAuthenticationModuleDynamicNames } from '@universal-packages/trpc-authentication'

@AuthDynamic<TrpcDefaultAuthenticationModuleDynamicNames>('set-session')
export default class SetSessionDynamic {
  public async perform(payload: SetSessionPayload<any, { session: Session }>): Promise<string> {
    const { user, context } = payload
    const { session } = context

    await session.logIn(user.id)

    return session.token
  }
}
