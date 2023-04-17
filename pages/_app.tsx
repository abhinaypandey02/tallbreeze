import type { AppProps } from 'next/app'

import '../styles/globals.css'
import { Nunito_Sans } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const nunito = Nunito_Sans({ weight:['300'], subsets: ['latin'] })
function MyApp({ Component, pageProps }: AppProps) {
  return <main className={nunito.className}>
    <Component {...pageProps} />
  </main>
}

export default MyApp
