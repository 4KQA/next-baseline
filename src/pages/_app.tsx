import { ChakraProvider } from "@chakra-ui/provider"
import type { AppProps } from "next/app"

import { Layout } from "../partials/Layout"
import defaultTheme from "../theme/default.theme"

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={defaultTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
