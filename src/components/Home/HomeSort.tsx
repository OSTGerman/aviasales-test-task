import React from 'react';
import { observer } from 'mobx-react-lite';
import ButtonGroup from '@components/UI/Buttons/ButtonGroup';
import Button from '@components/UI/Buttons/Button';
import { useStore } from '@store/store';
import styles from '@components/Home/Home.module.sass';

const HomeSort: React.FC = observer(() => {
    const { sort, setSort } = useStore();
    return (
        <div className={styles.sort}>
            <ButtonGroup>
                <Button mode={sort === 'price' ? 'primary' : 'secondary'} onClick={() => setSort('price')}>
                    Самый дешевый
                </Button>
                <Button mode={sort === 'duration' ? 'primary' : 'secondary'} onClick={() => setSort('duration')}>
                    Самый быстрый
                </Button>
                <Button mode={sort === 'optimal' ? 'primary' : 'secondary'} onClick={() => setSort('optimal')}>
                    Оптимальный
                </Button>
            </ButtonGroup>
        </div>
    );
});
export default HomeSort;
