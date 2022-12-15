import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Diplomata+SC&family=Lato:ital,wght@0,300;0,400;0,700;1,300&family=Mrs+Saint+Delafield&family=Tangerine:wght@400;700&display=swap" rel="stylesheet" />
    
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}