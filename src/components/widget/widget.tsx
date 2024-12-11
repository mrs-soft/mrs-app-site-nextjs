import { useEffect } from "react"
import "saas-shop-widget/dist/main.css"

const WIDGET_CLASS = "saas_shop_tariffs"

interface IWidget {
  className: string
  productId: string
}

export const Widget = ({className, productId}: IWidget) => {
  useEffect(() => {
    productId && initWidget(productId)
  }, [productId])

  const initWidget = async (id: string) => {
    const { WidgetSaasShopPresenter } = await import("saas-shop-widget")
      const config = {
        productId: id,
        redirectUrl: process.env.NEXT_PUBLIC_API_REDIRECT_URL || "",
        api: process.env.NEXT_PUBLIC_SAAS_SHOP_API || "",
      }
      const NewWidget = new WidgetSaasShopPresenter({
        idContainer: `.${WIDGET_CLASS}`,
        api: config.api,
        redirectUrl: config.redirectUrl,
        productId: "710d6023-0945-4060-a573-68e4527590fa",
        // productId: config.productId,
      })
      NewWidget.init(config)
  }


  return <div className={`${WIDGET_CLASS} ${className}`}></div>
}
