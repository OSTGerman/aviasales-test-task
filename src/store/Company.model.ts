import { Instance, types } from 'mobx-state-tree';

// компания
export const CompanyModel = types.model('CompanyModel', {
    id: types.string,
    // Название компании
    name: types.string,
    // Имя логотипа
    // Т.к. картинки пока храниться будут у Вас локально - имя и путь к картинке можете замапить на те что будут у вас
    logo: types.string,
});
export type ICompany = Instance<typeof CompanyModel>;
