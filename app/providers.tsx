'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import Fonts from './libs/styles/fonts'

const theme = extendTheme({
  fonts: {
    body: `'ChicagoFLF'!important, sans-serif`,
  },
})

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Fonts />
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
