import { createMachine, EventObject, MachineConfig, StateSchema } from 'xstate';

export type Sort = 'price' | 'duration' | 'optimal';
export interface SortEvent extends EventObject {
    type: Sort;
}
export interface SortStateSchema {
    states: {
        price: StateSchema<any>;
        duration: StateSchema<any>;
        optimal: StateSchema<any>;
    };
}
export type AvailableStates = keyof SortStateSchema['states'];
const SORT_BY_PRICE: Sort = 'price';
const SORT_BY_DURATION: Sort = 'duration';
const SORT_BY_OPTIMAL: Sort = 'optimal';
export const sortMachine = createMachine<MachineConfig<any, SortStateSchema, SortEvent>>({
    id: 'sort',
    initial: 'price',
    states: {
        price: { on: { SORT_BY_DURATION, SORT_BY_OPTIMAL } },
        duration: { on: { SORT_BY_PRICE, SORT_BY_OPTIMAL } },
        optimal: { on: { SORT_BY_PRICE, SORT_BY_DURATION } },
    },
});
