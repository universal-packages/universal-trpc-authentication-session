export interface RenderedSession {
  id: string
  lastActive: number
  ip: string
  userAgent: string
}

export type RenderedSessions = RenderedSession[]
