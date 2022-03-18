import type { NextApiRequest, NextApiResponse } from 'next';
import { Segment } from '@models/interfaces';
import segments from '/public/data/segments.json';

export const getSegment = (id: string): Segment => segments.find((s: Segment) => s.id === id);
export default function handler(req: NextApiRequest, res: NextApiResponse<Segment>) {
    res.status(200).json(segments);
}
