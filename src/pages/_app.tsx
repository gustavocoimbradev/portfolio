import { useEffect } from 'react'

import '@/styles/template.scss'
import type { AppProps } from 'next/app'

const loadBootstrap = () => {
  if (typeof window !== 'undefined') {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }
}

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    loadBootstrap();
  }, [])

  return <Component {...pageProps} />
}
