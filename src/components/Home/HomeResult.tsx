import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from '@components/Home/Home.module.sass';
import Ticket from '@components/Ticket/Ticket';
import Button from '@components/UI/Buttons/Button';
import { useStore } from '@store/store';
import { declOfNum } from '@utils/helperUtils';

const HomeResult: React.FC = observer(() => {
    const { tickets, loadTickets, hasTickets } = useStore();
    const ticketsCount = React.useMemo(() => (hasTickets < 5 ? hasTickets : 5), [hasTickets]);
    return (
        <div className={styles.result}>
            {!tickets.length ? (
                <div className={styles.nofound}>Ничего не найдено</div>
            ) : (
                <>
                    {tickets.map((ticket) => (
                        <Ticket key={ticket.id} ticket={ticket} />
                    ))}
                    {!!ticketsCount && (
                        <Button mode={'primary'} onClick={() => loadTickets()}>
                            Показать еще {ticketsCount} {declOfNum(ticketsCount, ['билет', 'билета', 'билетов'])}!
                        </Button>
                    )}
                </>
            )}
        </div>
    );
});
export default HomeResult;
