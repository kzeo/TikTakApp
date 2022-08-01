import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true)

  useEffect(() => {
    setIsSSR(false)
  }, [])

  if (isSSR) return null

  return (
    <div>
      <Navbar />
      <div className="flex gap- md:gap-20">
        <div className="h-[92vh] overflow-hidden x1:hover:overflow-auto">
          <Sidebar />
        </div>
        <div className="mt-4 flex gap-10 overflow-auto h-[88vh] videos flex-1">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  )
}

export default MyApp