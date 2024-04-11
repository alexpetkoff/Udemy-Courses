import { useMemo } from 'react'
import '../styles/globals.css'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useMemo(() => {
    router.prefetch = async () => { }
  }, [router])

  return <Component {...pageProps} />
}

export default MyApp
