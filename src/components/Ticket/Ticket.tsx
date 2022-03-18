import React from 'react';
import BlockHeader from '@components/UI/Block/BlockHeader';
import Image from 'next/image';
import Block from '@components/UI/Block/Block';
import styles from './Ticket.module.sass';
import { ITicket } from '@store/Ticket.model';
import { calcDuration, declOfNum, priceConverter, timeToString } from '@utils/helperUtils';

interface TicketProps {
    ticket: ITicket;
}
const Ticket: React.FC<TicketProps> = ({ ticket }) => (
    <Block>
        <BlockHeader>
            <div className={styles.price}>{priceConverter(ticket.price)}</div>
            {ticket.company && (
                <Image
                    src={ticket.company.logo}
                    alt={ticket.company.name}
                    width={110}
                    height={36}
                    className={styles.logo}
                />
            )}
        </BlockHeader>
        <div className={styles.content}>
            {ticket.segments.map((segment, index) => (
                <React.Fragment key={segment?.id || index}>
                    {segment && (
                        <div className={styles.row}>
                            <div className={styles.block}>
                                <h3 className={styles.title}>
                                    {segment.origin} – {segment.destination}
                                </h3>
                                <div className={styles.data}>
                                    {timeToString(segment.dateStart)} – {timeToString(segment.dateEnd)}
                                </div>
                            </div>
                            <div className={styles.block}>
                                <h3 className={styles.title}>В пути</h3>
                                <div className={styles.data}>{calcDuration(segment.duration)}</div>
                            </div>
                            <div className={styles.block}>
                                <h3 className={styles.title}>
                                    {segment.stops.length || 'Без'}{' '}
                                    {declOfNum(segment.stops.length, ['пересадка', 'пересадки', 'пересадок'])}
                                </h3>
                                <div className={styles.data}>{segment.stops.join(', ')}</div>
                            </div>
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    </Block>
);
export default Ticket;
