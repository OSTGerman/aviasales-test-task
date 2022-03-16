import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@components/Layout/Layout';
import Logo from '@components/Logo/Logo';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Aviasales Test Task</title>
            </Head>
            <Layout>
                <Logo />
            </Layout>
        </>
    );
};

export default Home;
