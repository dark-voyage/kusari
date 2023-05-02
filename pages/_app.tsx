import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from '@/components/ui/toaster'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  )
}

export default MyApp
