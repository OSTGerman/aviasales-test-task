import React from 'react';
import BlockHeader from '@components/UI/Block/BlockHeader';
import Image from 'next/image';
import Block from '@components/UI/Block/Block';
import styles from './Ticket.module.sass';

const Ticket: React.FC = () => (
    <Block>
        <BlockHeader>
            <div className={styles.price}>13 400 Р</div>
            <Image
                src={'/images/XiamenAir Logo.png'}
                alt={'XiamenAir Logo'}
                width={110}
                height={36}
                className={styles.logo}
            />
        </BlockHeader>
        <div className={styles.content}>
            <div className={styles.row}>
                <div className={styles.block}>
                    <h3 className={styles.title}>MOW – HKT</h3>
                    <div className={styles.data}>10:45 – 08:00</div>
                </div>
                <div className={styles.block}>
                    <h3 className={styles.title}>В пути</h3>
                    <div className={styles.data}>21ч 15м</div>
                </div>
                <div className={styles.block}>
                    <h3 className={styles.title}>2 пересадки</h3>
                    <div className={styles.data}>HKG, JNB</div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.block}>
                    <h3 className={styles.title}>MOW – HKT</h3>
                    <div className={styles.data}>11:20 – 00:50</div>
                </div>
                <div className={styles.block}>
                    <h3 className={styles.title}>В пути</h3>
                    <div className={styles.data}>13ч 30м</div>
                </div>
                <div className={styles.block}>
                    <h3 className={styles.title}>1 пересадка</h3>
                    <div className={styles.data}>HKG</div>
                </div>
            </div>
        </div>
    </Block>
);
export default Ticket;
