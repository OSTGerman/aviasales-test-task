import type { NextApiRequest, NextApiResponse } from 'next';
import { Segment } from '../../interfaces';
import segments from '/public/data/segments.json';

export default function handler(req: NextApiRequest, res: NextApiResponse<Segment>) {
    res.status(200).json(segments);
}
