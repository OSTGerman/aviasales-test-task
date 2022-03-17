import React from 'react';
import { applySnapshot, flow, Instance, SnapshotIn, SnapshotOut, types } from 'mobx-state-tree';
import { TicketModel } from '@store/Ticket.model';
import { CompanyModel, ICompany } from '@store/Company.model';
import { ISegment, SegmentModel } from '@store/Segment.model';

export const Store = types
    .model({
        tickets: types.array(TicketModel),
        companies: types.array(CompanyModel),
        segments: types.array(SegmentModel),
    })
    .views((self) => ({
        getSegment(id: string): ISegment | undefined {
            return self.segments.find((s) => s.id === id) || undefined;
        },
        getCompany(id: string): ICompany | undefined {
            return self.companies.find((s) => s.id === id) || undefined;
        },
    }))
    .actions((self) => {
        const loadTickets = flow(function* () {
            self.tickets = yield fetch('/api/tickets/', { method: 'GET' }).then((res) => res.json());
        });
        const loadCompanies = flow(function* () {
            self.companies = yield fetch('/api/companies/', { method: 'GET' }).then((res) => res.json());
        });
        const loadSegments = flow(function* () {
            self.segments = yield fetch('/api/segments/', { method: 'GET' }).then((res) => res.json());
        });
        return {
            loadTickets,
            loadCompanies,
            loadSegments,
            afterCreate() {
                loadCompanies();
                loadSegments();
                loadTickets();
            },
        };
    });

export type IStore = Instance<typeof Store>;
export type IStoreSnapshotIn = SnapshotIn<typeof Store>;
export type IStoreSnapshotOut = SnapshotOut<typeof Store>;

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
