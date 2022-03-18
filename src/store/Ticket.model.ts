import { Instance, types } from 'mobx-state-tree';
import { SegmentModel } from '@store/Segment.model';
import { CompanyModel } from '@store/Company.model';

// сам билет, включает в себя остальные сущности
export const TicketModel = types.model('TicketModel', {
    id: types.string,
    // Цена в рублях
    price: types.number,
    // компания которая осуществляет перевозку
    company: CompanyModel,
    // Массив идентификаторов перелётов
    segments: types.array(SegmentModel),
});
export type ITicket = Instance<typeof TicketModel>;
