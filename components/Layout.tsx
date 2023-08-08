import Head from 'next/head'

type Props = {
  children: React.ReactNode
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
