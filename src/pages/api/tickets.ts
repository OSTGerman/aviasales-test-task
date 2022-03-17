import type { NextApiRequest, NextApiResponse } from 'next';
import { Ticket } from '../../interfaces';
import tickets from '/public/data/tickets.json';

export default function handler(req: NextApiRequest, res: NextApiResponse<Ticket[]>) {
    let { page } = req.query;
    if (!page) page = '1';
    const perPage = 5;
    const totalTickets = tickets.length;
    const start = (Number(page) - 1) * perPage;
    let end = start + perPage;
    if (end > totalTickets) {
        end = totalTickets;
    }

    res.status(200).json(tickets.slice(start, end));
}
