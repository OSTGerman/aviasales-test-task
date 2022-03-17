import { Instance, types } from 'mobx-state-tree';

// сам билет, включает в себя остальные сущности
export const TicketModel = types.model('TicketModel', {
    id: types.string,
    // Цена в рублях
    price: types.number,
    // идентификатор компании которая осуществляет перевозку
    companyId: types.string,
    // Массив идентификаторов перелётов
    segments: types.array(types.string),
});
export type ITicket = Instance<typeof TicketModel>;
