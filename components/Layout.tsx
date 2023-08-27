import Head from 'next/head'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>My Sanity App</title>
      </Head>
      <html>
        <body>
          {children}
        </body>
      </html>
    </>
  )
}

export default Layout
