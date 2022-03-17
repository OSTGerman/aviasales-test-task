import { Instance, types } from 'mobx-state-tree';

// Список кодов городов. Мы в каждом билете будем лететь с MOW в EKT
export const CityCodes = types.enumeration([
    'MOW',
    'HKT',
    'HKG',
    'JNB',
    'PTB',
    'ARH',
    'TRN',
    'KRS',
    'SRT',
    'LOS',
    'EKV',
    'EKT',
]);

// список перелётов
export const SegmentModel = types.model('SegmentModel', {
    id: types.string,
    // Код города откуда вылет
    origin: CityCodes,
    // Код города куда летим
    destination: CityCodes,
    // Дата и время вылета в unix времени
    dateStart: types.number,
    // Дата и время прибытия в unix времени
    dateEnd: types.number,
    // Массив кодов городов с пересадками
    stops: types.array(CityCodes),
    // Длительность полета в миллисекундах
    duration: types.number,
});
export type ISegment = Instance<typeof SegmentModel>;
export type ICityCode = Instance<typeof CityCodes>;
