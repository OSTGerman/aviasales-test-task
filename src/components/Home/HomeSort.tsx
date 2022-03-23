import React from 'react';
import { observer } from 'mobx-react-lite';
import ButtonGroup from '@components/UI/Buttons/ButtonGroup';
import Button from '@components/UI/Buttons/Button';
import { useStore } from '@store/store';
import styles from '@components/Home/Home.module.sass';

const HomeSort: React.FC = observer(() => {
    const { sort, service } = useStore();
    React.useEffect(() => {
        service.start();
        return () => {
            service.stop();
        };
    }, []);
    return (
        <div className={styles.sort}>
            <ButtonGroup>
                <Button
                    mode={sort.toString() === 'price' ? 'primary' : 'secondary'}
                    onClick={() => service.send('SORT_BY_PRICE')}
                >
                    Самый дешевый
                </Button>
                <Button
                    mode={sort.toString() === 'duration' ? 'primary' : 'secondary'}
                    onClick={() => service.send('SORT_BY_DURATION')}
                >
                    Самый быстрый
                </Button>
                <Button
                    mode={sort.toString() === 'optimal' ? 'primary' : 'secondary'}
                    onClick={() => service.send('SORT_BY_OPTIMAL')}
                >
                    Оптимальный
                </Button>
            </ButtonGroup>
        </div>
    );
});
export default HomeSort;
