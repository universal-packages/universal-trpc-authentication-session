import { Authentication } from '@universal-packages/authentication'
import { Session } from '@universal-packages/express-session'
import { TrpcDefaultAuthenticationModuleDynamicNames } from '@universal-packages/trpc-authentication'

describe('set-session', (): void => {
  it('sets the new session and returns the token', async (): Promise<void> => {
    const authentication = new Authentication<TrpcDefaultAuthenticationModuleDynamicNames>({ secret: '123', dynamicsLocation: './tests/__fixtures__' })
    await authentication.loadDynamics()

    const request = { headers: { 'user-agent': 'test' } }
    const response = { header: jest.fn() as any, cookie: jest.fn() }
    const session = new Session(request, response)

    const context = { session }

    const result = await authentication.performDynamic('set-session', { user: { id: 1 }, context })

    expect(result).toEqual(expect.any(String))
  })
})
