import { AppProps } from "next/app"

import "../styles/global.css"

export const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}
