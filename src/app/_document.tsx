// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Add Umami script here */}
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="59856e91-5f7e-4988-bf2b-e1976f3b3fdf"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
