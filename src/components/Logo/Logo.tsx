import React from 'react';
import styles from './Logo.module.sass';
import Image from 'next/image';

const Logo: React.FC = () => (
    <div className={styles.logotype}>
        <Image src={'/images/Logo.png'} alt={'logotype'} layout="fill" />
    </div>
);
export default Logo;
