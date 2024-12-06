import { Authentication } from '@universal-packages/authentication'
import { TrpcDefaultAuthenticationModuleDynamicNames } from '@universal-packages/trpc-authentication'

describe('render-sessions', (): void => {
  it('returns the active sessions', async (): Promise<void> => {
    const authentication = new Authentication<TrpcDefaultAuthenticationModuleDynamicNames>({ secret: '123', dynamicsLocation: './tests/__fixtures__' })
    await authentication.loadDynamics()

    const result = await authentication.performDynamic('render-sessions', {
      user: { id: '1' } as any,
      context: {
        session: {
          activeSessions: () => ({
            '123': { id: 1, lastIp: '1:1:1:1', lastAccessed: 785875, userAgent: 'firefox' },
            '456': { id: 2, lastIp: '1:1:1:1', lastAccessed: 8454564, userAgent: 'firefox' }
          })
        }
      }
    })

    expect(result).toEqual([
      { id: 1, lastActive: 785875, ip: '1:1:1:1', userAgent: 'firefox' },
      { id: 2, lastActive: 8454564, ip: '1:1:1:1', userAgent: 'firefox' }
    ])
  })
})
