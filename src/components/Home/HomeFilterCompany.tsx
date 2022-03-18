import React from 'react';
import { observer } from 'mobx-react-lite';
import BlockHeader from '@components/UI/Block/BlockHeader';
import List from '@components/UI/List/List';
import Check from '@components/UI/Check/Check';
import Block from '@components/UI/Block/Block';
import { useStore } from '@store/store';
import { Company } from '@models/interfaces';

const HomeFilterCompany: React.FC<React.PropsWithChildren<{ companies: Company[] }>> = observer(({ companies }) => {
    const { companyId, setCompanyId } = useStore();
    return (
        <Block>
            <BlockHeader>
                <h3>Компания</h3>
            </BlockHeader>
            <List>
                <Check
                    mode={'radio'}
                    id={'all'}
                    name={'companies'}
                    checked={!companyId}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => e.target.checked && setCompanyId(null)}
                >
                    Все
                </Check>
                {companies.map((company) => (
                    <Check
                        key={company.id}
                        mode={'radio'}
                        id={company.id}
                        checked={company.id === companyId}
                        name={'companies'}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            e.target.checked && setCompanyId(company.id)
                        }
                    >
                        {company.name}
                    </Check>
                ))}
            </List>
        </Block>
    );
});
export default HomeFilterCompany;
