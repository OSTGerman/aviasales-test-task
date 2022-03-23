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
const SORT_BY_PRICE: Sort = 'price';
const SORT_BY_DURATION: Sort = 'duration';
const SORT_BY_OPTIMAL: Sort = 'optimal';
export const sortMachine = createMachine<MachineConfig<null, SortStateSchema, SortEvent>>({
    id: 'sort',
    initial: SORT_BY_PRICE,
    states: {
        price: { on: { SORT_BY_DURATION, SORT_BY_OPTIMAL } },
        duration: { on: { SORT_BY_PRICE, SORT_BY_OPTIMAL } },
        optimal: { on: { SORT_BY_PRICE, SORT_BY_DURATION } },
    },
});
