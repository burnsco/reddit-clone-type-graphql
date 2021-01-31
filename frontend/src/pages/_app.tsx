import { ChakraWrapper } from "@/components/common"
import { useApollo } from "@/lib/apolloClient"
import { ApolloProvider } from "@apollo/client"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <ChakraWrapper>
        <Component {...pageProps} />
      </ChakraWrapper>
    </ApolloProvider>
  )
}
