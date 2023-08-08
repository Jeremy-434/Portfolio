import Head from 'next/head';
import { PageInfo } from '../typings';

type Props = {
    children: React.ReactNode;
    pageInfo: PageInfo;
}

const Layout = ({ children, pageInfo }: Props) => {
    return (
        <>
            <Head>
                <title >{pageInfo?.name} Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
        </>
    )
}

export default Layout
