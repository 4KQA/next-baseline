import { ChakraProvider } from "@chakra-ui/provider";
import type { AppProps } from "next/app";

import DefaultLayout from "../layouts/default.layout";
import defaultTheme from "../theme/default.theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={defaultTheme}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ChakraProvider>
  );
}

export default MyApp;
