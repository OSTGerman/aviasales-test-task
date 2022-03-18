import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from '@components/Home/Home.module.sass';
import Ticket from '@components/Ticket/Ticket';
import Button from '@components/UI/Buttons/Button';
import { useStore } from '@store/store';

const HomeResult: React.FC = observer(() => {
    const { tickets, loadTickets, hasTickets } = useStore();
    return (
        <div className={styles.result}>
            {!tickets.length ? (
                <div className={styles.nofound}>Ничего не найдено</div>
            ) : (
                <>
                    {tickets.map((ticket) => (
                        <Ticket key={ticket.id} ticket={ticket} />
                    ))}
                    {hasTickets && (
                        <Button mode={'primary'} onClick={() => loadTickets()}>
                            Показать еще 5 билетов!
                        </Button>
                    )}
                </>
            )}
        </div>
    );
});
export default HomeResult;
