export {}

export interface IConfig {
  subscriptionId?: string
  hightlight?: string
  productId?: string
}

declare global {
  interface Window {
    WidgetConfig: IConfig
  }
}
