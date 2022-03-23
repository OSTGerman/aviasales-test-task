import type { NextApiRequest, NextApiResponse } from 'next';
import { Segment, Ticket } from '@models/interfaces';
import tickets from '/public/data/tickets.json';
import { getSegment } from './segments';
import { getCompany } from './companies';

interface TicketsResponse {
    results: Ticket<Segment>[];
    totalCount: number;
    currentPage: number;
}

function getSortedFilteredTickets(sort: string, stops: string[], companyId?: string): Ticket<Segment>[] {
    const calcTotalDuration = (arr: Segment[]): number =>
        arr.map((s) => s.duration).reduce((a, c) => (a || 0) + (c || 0), 0) || 0;

    const filteredTickets: Ticket<Segment>[] = (
        companyId ? tickets.filter((t: Ticket<string>) => t.companyId === companyId) : tickets
    )
        .filter((t: Ticket<string>) =>
            t.segments.map((s) => String(getSegment(s).stops.length)).every((v) => stops.includes(v))
        )
        .map((t: Ticket<string>) => ({
            ...t,
            segments: t.segments.map((s) => getSegment(s)),
            company: getCompany(t.companyId),
        }));
    switch (sort) {
        case 'price':
            return [...filteredTickets.sort((a, b) => a.price - b.price)];
        case 'duration':
            return [...filteredTickets.sort((a, b) => calcTotalDuration(a.segments) - calcTotalDuration(b.segments))];
        case 'optimal':
            return [
                ...filteredTickets.sort(
                    (a, b) =>
                        a.segments.length - b.segments.length ||
                        a.price - b.price ||
                        calcTotalDuration(a.segments) - calcTotalDuration(b.segments)
                ),
            ];
        default:
            return filteredTickets;
    }
}
type Query = { page: string; sort: string; stops: string; companyId?: string };
export default function handler(req: NextApiRequest, res: NextApiResponse<TicketsResponse>) {
    const { page, sort, companyId, stops } = req.query as Query;
    const requestedPage = Number(page) || 1;
    const sortedTickets = getSortedFilteredTickets(sort, stops.split(','), companyId);
    const perPage = 5;
    const totalTickets = sortedTickets.length;
    const start = (requestedPage - 1) * perPage;
    let end = start + perPage;
    if (end > totalTickets) {
        end = totalTickets;
    }

    res.status(200).json({
        totalCount: totalTickets,
        currentPage: requestedPage,
        results: sortedTickets.slice(start, end),
    });
}
