import type { NextApiRequest, NextApiResponse } from 'next';
import { Company } from '../../interfaces';
import companies from '/public/data/companies.json';

export default function handler(req: NextApiRequest, res: NextApiResponse<Company>) {
    res.status(200).json(companies);
}
