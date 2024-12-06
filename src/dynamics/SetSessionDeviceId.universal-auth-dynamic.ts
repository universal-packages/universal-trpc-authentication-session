import { AuthDynamic } from '@universal-packages/authentication'
import { Session } from '@universal-packages/express-session'
import { SetSessionDeviceIdPayload, TrpcDefaultAuthenticationModuleDynamicNames } from '@universal-packages/trpc-authentication'

@AuthDynamic<TrpcDefaultAuthenticationModuleDynamicNames>('set-session-device-id')
export default class SetSessionDeviceIdDynamic {
  public async perform(payload: SetSessionDeviceIdPayload<any, { session: Session }>): Promise<void> {
    const session = payload.context.session

    await session.updateDeviceId(payload.deviceId)
  }
}
