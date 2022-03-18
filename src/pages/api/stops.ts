import type { NextApiRequest, NextApiResponse } from 'next';
import tickets from '/public/data/tickets.json';
import { Ticket } from '@models/interfaces';
import { getSegment } from './segments';

export default function handler(req: NextApiRequest, res: NextApiResponse<string[]>) {
    const stops: Set<string> = new Set(
        tickets
            .map((t: Ticket<string>) => t.segments.map((s: string) => String(getSegment(s).stops.length)))
            .flat()
            .sort()
    );
    res.status(200).json([...stops]);
}
