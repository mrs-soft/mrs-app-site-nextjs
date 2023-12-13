import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const metrika = `${process.env.NEXT_PUBLIC_API_URL}assets/js/metrika.js`;

  return (
    <Html>
      <Head>
        <script type="text/javascript" src={metrika} async />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/95769331"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
