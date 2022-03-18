import React from 'react';
import { applySnapshot, cast, flow, Instance, SnapshotIn, types } from 'mobx-state-tree';
import { TicketModel } from '@store/Ticket.model';

export type Sort = 'price' | 'duration' | 'optimal';
export const Store = types
    .model({
        tickets: types.array(TicketModel),
        stops: types.array(types.string),
    })
    .volatile(() => ({
        page: 1,
        sort: 'price' as Sort,
        totalTickets: 0,
        companyId: null as string | null,
    }))
    .views((self) => ({
        get hasTickets(): number {
            return self.totalTickets - self.tickets.length;
        },
    }))
    .actions((self) => {
        const loadTickets = flow(function* (reload = false) {
            const url = new URL('http://localhost:3000/api/tickets/');
            url.searchParams.append('page', self.page.toString());
            url.searchParams.append('sort', self.sort);
            url.searchParams.append('stops', self.stops.join(','));
            if (self.companyId) url.searchParams.append('companyId', self.companyId);
            try {
                const data = yield fetch(url.toString()).then((res) => res.json());
                if (reload) self.tickets.clear();
                for (const item of data.results) {
                    self.tickets.push(item);
                }
                self.page = ++data.currentPage;
                self.totalTickets = data.totalCount;
            } catch (err) {
                console.log('loading tickets error: ' + err);
            }
        });
        const reloadTickets = () => {
            self.page = 1;
            self.totalTickets = 0;
            loadTickets(true).then((r) => r);
        };
        const setSort = (value: Sort) => {
            self.sort = value;
            reloadTickets();
        };
        const setCompanyId = (id: string | null) => {
            self.companyId = id;
            reloadTickets();
        };
        const addStops = (value: string) => {
            if (!self.stops.includes(value)) {
                self.stops.push(value);
                reloadTickets();
            }
        };
        const removeStops = (value: string) => {
            if (self.stops.includes(value)) {
                self.stops = cast(self.stops.filter((v) => v !== value));
                reloadTickets();
            }
        };
        const setStops = (data: string[]) => {
            self.stops = cast(data);
            reloadTickets();
        };
        return {
            loadTickets,
            setSort,
            setCompanyId,
            addStops,
            removeStops,
            setStops,
            set<K extends keyof SnapshotIn<typeof self>, T extends SnapshotIn<typeof self>>(key: K, value: T[K]) {
                self[key] = cast(value);
            },
        };
    });

export type IStore = Instance<typeof Store>;
export type IStoreSnapshotIn = SnapshotIn<typeof Store>;

let store: IStore | undefined;

export function initializeStore(snapshot = null): IStore {
    const _store = store ?? Store.create({});
    if (snapshot) applySnapshot(_store, snapshot);
    if (typeof window === 'undefined') return _store;
    if (!store) store = _store;
    return store;
}

export function useStore(initialState?: any | null): IStore {
    return React.useMemo(() => initializeStore(initialState), [initialState]);
}
