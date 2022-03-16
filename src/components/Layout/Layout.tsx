import React from 'react';
import styles from './Layout.module.sass';
import Logo from '@components/Logo/Logo';

const Layout: React.FC = (props) => (
    <>
        <header className={styles.header}>
            <Logo />
        </header>
        <main className={styles.content}>{props.children}</main>
    </>
);
export default Layout;
