export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BOT_TOKEN: string
      IS_DEV: string
      PORT: string
    }
  }
}