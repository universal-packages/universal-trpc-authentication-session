import { createSessionContext } from '../src'

describe('render-sessions', (): void => {
  describe(createSessionContext, (): void => {
    it('extracts the session object from the request', async (): Promise<void> => {
      expect(createSessionContext({ req: { session: { id: 1 } } } as any)).toEqual({ session: { id: 1 } })
    })
  })
})
