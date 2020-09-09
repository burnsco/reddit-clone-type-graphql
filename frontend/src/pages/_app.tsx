import { AppProps } from 'next/dist/next-server/lib/router/router'
import * as React from 'react'

import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/core'
import { theme } from '@chakra-ui/theme'

import { useApollo } from '../lib/apolloClient'

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}
