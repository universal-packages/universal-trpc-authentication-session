import { Authentication } from '@universal-packages/authentication'
import UserFromId from '@universal-packages/authentication/UserFromId.universal-auth-dynamic'
import { TrpcDefaultAuthenticationModuleDynamicNames } from '@universal-packages/trpc-authentication'

describe('user-from-context', (): void => {
  it('returns the user based on session data', async (): Promise<void> => {
    const authentication = new Authentication<TrpcDefaultAuthenticationModuleDynamicNames>({ secret: '123', dynamicsLocation: './tests/__fixtures__' })
    await authentication.loadDynamics()

    dynamicApiJest.mockDynamicReturnValue(UserFromId, { id: '1' })

    const result = await authentication.performDynamic('user-from-context', {
      context: { session: { userId: '1', authenticated: true } }
    })

    expect(result).toEqual({ id: '1' })
  })

  it('returns nothing if session does not has the data', async (): Promise<void> => {
    const authentication = new Authentication<TrpcDefaultAuthenticationModuleDynamicNames>({ secret: '123', dynamicsLocation: './tests/__fixtures__' })
    await authentication.loadDynamics()

    const result = await authentication.performDynamic('user-from-context', {
      context: { session: { authenticated: false } }
    })

    expect(result).toEqual(undefined)
  })
})
