import React from 'react';
import { observer } from 'mobx-react-lite';
import BlockHeader from '@components/UI/Block/BlockHeader';
import List from '@components/UI/List/List';
import Check from '@components/UI/Check/Check';
import { declOfNum } from '@utils/helperUtils';
import Block from '@components/UI/Block/Block';
import { useStore } from '@store/store';

const HomeFilterStops: React.FC<React.PropsWithChildren<{ filter: string[] }>> = observer(({ filter }) => {
    const { stops, set, addStops, removeStops } = useStore();
    React.useEffect(() => {
        set('stops', filter);
    }, []);
    return (
        <Block>
            <BlockHeader>
                <h3>Количество пересадок</h3>
            </BlockHeader>
            <List>
                {filter?.map((item) => (
                    <Check
                        key={item}
                        mode={'checkbox'}
                        id={`stop-${item}`}
                        name={`stop-${item}`}
                        checked={stops.includes(item)}
                        onChange={(e) => {
                            if (e.target.checked) addStops(item);
                            else removeStops(item);
                        }}
                    >
                        {item !== '0' ? item : 'Без'} {declOfNum(Number(item), ['пересадка', 'пересадки', 'пересадок'])}
                    </Check>
                ))}
            </List>
        </Block>
    );
});
export default HomeFilterStops;
