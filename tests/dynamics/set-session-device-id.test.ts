import { Authentication } from '@universal-packages/authentication'
import { Session } from '@universal-packages/express-session'
import { TrpcDefaultAuthenticationModuleDynamicNames } from '@universal-packages/trpc-authentication'

describe('set-session-device-uid', (): void => {
  it('sets the device id into the session', async (): Promise<void> => {
    const authentication = new Authentication<TrpcDefaultAuthenticationModuleDynamicNames>({ secret: '123', dynamicsLocation: './tests/__fixtures__' })
    await authentication.loadDynamics()

    const request = { headers: { 'user-agent': 'test' } }
    const response = { header: jest.fn() as any, cookie: jest.fn() }
    const session = new Session(request, response)

    const context = { session }
    session.logIn(1)

    await authentication.performDynamic('set-session-device-id', { user: { id: 1 }, context, deviceId: 'test' })

    expect(session.deviceId).toEqual('test')
  })
})
