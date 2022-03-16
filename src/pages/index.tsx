import type { NextPage } from 'next';
import Layout from '@components/Layout/Layout';
import layout from '@components/Layout/Layout.module.sass';
import Block from '@components/UI/Block/Block';
import BlockHeader from '@components/UI/Block/BlockHeader';
import ButtonGroup from '@components/UI/Buttons/ButtonGroup';
import Button from '@components/UI/Buttons/Button';
import Ticket from '@components/Ticket/Ticket';
import List from '@components/UI/List/List';
import Checkbox from '@components/UI/Controls/Checkbox';
import RadioButton from '@components/UI/Controls/RadioButton';

const Home: NextPage = () => {
    return (
        <Layout>
            <div className={layout.filter}>
                <Block>
                    <BlockHeader>
                        <h3>Количество пересадок</h3>
                    </BlockHeader>
                    <List>
                        <Checkbox id={'stop-0'} disabled={true}>
                            Без пересадок
                        </Checkbox>
                        <Checkbox id={'stop-1'} checked={true}>
                            1 пересадка
                        </Checkbox>
                        <Checkbox id={'stop-2'}>2 пересадки</Checkbox>
                        <Checkbox id={'stop-3'}>3 пересадки</Checkbox>
                    </List>
                </Block>
                <Block>
                    <BlockHeader>
                        <h3>Компания</h3>
                    </BlockHeader>
                    <List>
                        <RadioButton id={'all'} name={'companies'}>
                            Все
                        </RadioButton>
                        <RadioButton id={'S7'} name={'companies'}>
                            S7 Airlines
                        </RadioButton>
                        <RadioButton id={'XiamenAir'} name={'companies'}>
                            XiamenAir
                        </RadioButton>
                    </List>
                </Block>
            </div>
            <div className={layout.sort}>
                <ButtonGroup>
                    <Button mode={'primary'}>Самый дешевый</Button>
                    <Button mode={'secondary'}>Самый быстрый</Button>
                    <Button mode={'secondary'}>Оптимальный</Button>
                </ButtonGroup>
            </div>
            <div className={layout.result}>
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
                <Button mode={'primary'}>Показать еще 5 билетов!</Button>
            </div>
        </Layout>
    );
};

export default Home;
