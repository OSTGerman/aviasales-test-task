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
    </Block>
);
export default Ticket;
