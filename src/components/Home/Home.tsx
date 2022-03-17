import React from 'react';
import { observer } from 'mobx-react-lite';
import Block from '@components/UI/Block/Block';
import BlockHeader from '@components/UI/Block/BlockHeader';
import List from '@components/UI/List/List';
import ButtonGroup from '@components/UI/Buttons/ButtonGroup';
import Button from '@components/UI/Buttons/Button';
import Ticket from '@components/Ticket/Ticket';
import Logo from '@components/Logo/Logo';
import Check from '@components/UI/Check/Check';
import styles from './Home.module.sass';
import { useStore } from '@store/store';
import { ICompany } from '@store/Company.model';

const Home: React.FC = observer(() => {
    const { tickets, companies, getCompany, getSegment } = useStore();
    const [loading, setLoading] = React.useState<boolean>(true);
    const filterByCompany = (company: ICompany) => {
        console.log(company);
    };
    React.useEffect(() => {
        if (tickets.length) setLoading(false);
    }, [tickets.length]);
    return (
        <>
            <header className={styles.header}>
                <Logo />
            </header>
            <main className={styles.content}>
                <div className={styles.filter}>
                    <Block>
                        <BlockHeader>
                            <h3>Количество пересадок</h3>
                        </BlockHeader>
                        <List>
                            <Check mode={'checkbox'} id={'stop-0'} disabled={true}>
                                Без пересадок
                            </Check>
                            <Check mode={'checkbox'} id={'stop-1'} checked={true}>
                                1 пересадка
                            </Check>
                            <Check mode={'checkbox'} id={'stop-2'}>
                                2 пересадки
                            </Check>
                            <Check mode={'checkbox'} id={'stop-3'}>
                                3 пересадки
                            </Check>
                        </List>
                    </Block>
                    <Block>
                        <BlockHeader>
                            <h3>Компания</h3>
                        </BlockHeader>
                        <List>
                            <Check mode={'radio'} id={'all'} name={'companies'} checked={true}>
                                Все
                            </Check>
                            {companies.map((company) => (
                                <Check
                                    key={company.id}
                                    mode={'radio'}
                                    id={company.id}
                                    name={'companies'}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        if (e.target.checked) {
                                            filterByCompany(company);
                                        }
                                    }}
                                >
                                    {company.name}
                                </Check>
                            ))}
                        </List>
                    </Block>
                </div>
                <div className={styles.sort}>
                    <ButtonGroup>
                        <Button mode={'primary'}>Самый дешевый</Button>
                        <Button mode={'secondary'}>Самый быстрый</Button>
                        <Button mode={'secondary'}>Оптимальный</Button>
                    </ButtonGroup>
                </div>
                <div className={styles.result}>
                    {loading ? (
                        <div className={styles.loading}>Loading...</div>
                    ) : (
                        <>
                            {tickets.map((ticket) => (
                                <Ticket
                                    key={ticket.id}
                                    ticket={ticket}
                                    company={getCompany(ticket.companyId)}
                                    segments={ticket.segments.map((s) => getSegment(s))}
                                />
                            ))}
                            <Button mode={'primary'}>Показать еще 5 билетов!</Button>
                        </>
                    )}
                </div>
            </main>
        </>
    );
});
export default Home;
