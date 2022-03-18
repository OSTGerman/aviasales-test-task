import Head from 'next/head';
import React from 'react';
import { InferGetServerSidePropsType, NextPage } from 'next';
import styles from '@components/Home/Home.module.sass';
import Logo from '@components/Logo/Logo';
import HomeFilterStops from '@components/Home/HomeFilterStops';
import HomeFilterCompany from '@components/Home/HomeFilterCompany';
import HomeSort from '@components/Home/HomeSort';
import HomeResult from '@components/Home/HomeResult';
import { Company } from '@models/interfaces';

export const getServerSideProps = async () => {
    const filter: string[] = await fetch('http://localhost:3000/api/stops/').then((res) => res.json());
    const companies: Company[] = await fetch('http://localhost:3000/api/companies/').then((res) => res.json());
    return { props: { filter, companies } };
};

export const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
    return (
        <>
            <Head>
                <title>Aviasales Test Task</title>
            </Head>
            <header className={styles.header}>
                <Logo />
            </header>
            <main className={styles.content}>
                <div className={styles.filter}>
                    <HomeFilterStops filter={props.filter} />
                    <HomeFilterCompany companies={props.companies} />
                </div>
                <HomeSort />
                <HomeResult />
            </main>
        </>
    );
};

export default Home;
