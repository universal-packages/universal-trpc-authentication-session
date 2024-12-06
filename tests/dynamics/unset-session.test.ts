import { Authentication } from '@universal-packages/authentication'
import { TrpcDefaultAuthenticationModuleDynamicNames } from '@universal-packages/trpc-authentication'

describe('unset-session', (): void => {
  it('unset the current session', async (): Promise<void> => {
    const authentication = new Authentication<TrpcDefaultAuthenticationModuleDynamicNames>({ secret: '123', dynamicsLocation: './tests/__fixtures__' })
    await authentication.loadDynamics()

    const context = { session: { logOut: jest.fn() } }

    const result = await authentication.performDynamic('unset-session', { user: { id: 1 }, context })

    expect(result).toBeUndefined()
    expect(context.session.logOut).toHaveBeenCalled()
  })

  it('unset the session from a sessionId', async (): Promise<void> => {
    const authentication = new Authentication<TrpcDefaultAuthenticationModuleDynamicNames>({ secret: '123', dynamicsLocation: './tests/__fixtures__' })
    await authentication.loadDynamics()

    const context = { session: { logOut: jest.fn(), activeSessions: () => ({ '123': { id: '1' }, '456': { id: '2' } }) } }

    const result = await authentication.performDynamic('unset-session', { user: { id: 1 }, context, sessionId: '1' })

    expect(result).toBeUndefined()
    expect(context.session.logOut).toHaveBeenCalledWith('123')
  })
})
