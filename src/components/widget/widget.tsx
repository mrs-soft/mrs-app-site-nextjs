import { useEffect } from "react"

export const Widget = ({className}: any) => {
  useEffect(() => {
    const head = document.querySelector("body")
    const script = document.createElement("script")
    const link = document.createElement("link")

    script.setAttribute("src", process.env.NEXT_PUBLIC_API_URL ? `${process.env.NEXT_PUBLIC_API_URL}assets/js/index.js` : `assets/js/index.js`)
    link.setAttribute("href", process.env.NEXT_PUBLIC_API_URL ? `${process.env.NEXT_PUBLIC_API_URL}assets/style/widget.css` : `assets/style/widget.css`)
    link.setAttribute("rel", "stylesheet")
    head?.appendChild(script)
    head?.appendChild(link)

    // window.WidgetConfig = {
    //   subscriptionId: "3",
    // }

    // return () => {
    //   head?.removeChild(script)
    //   head?.removeChild(link)
    // }
  }, [])

  // useEffect(() => {
  //   if (!window.NewWidget) return

  //   console.log(window.NewWidget)
  //   window.NewWidget.init()
  // }, [window.NewWidget])

  return <div className={`saas_shop_tariffs ${className}`}></div>

}
