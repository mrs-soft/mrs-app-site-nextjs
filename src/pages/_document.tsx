import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const metrika = process.env.NEXT_PUBLIC_API_URL
    ? `${process.env.NEXT_PUBLIC_API_URL}assets/js/metrika.js`
    : "assets/js/metrika.js";

  return (
    <Html>
      <Head>
        <script type="text/javascript" src={metrika} defer />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/95769331"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        <meta name="yandex-verification" content="23e07f627b8a99f0" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
