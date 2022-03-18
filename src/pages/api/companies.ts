import type { NextApiRequest, NextApiResponse } from 'next';
import { Company } from '@models/interfaces';
import companies from '/public/data/companies.json';

export const getCompany = (id: string): Company => companies.find((c: Company) => c.id === id);
export default function handler(req: NextApiRequest, res: NextApiResponse<Company>) {
    res.status(200).json(companies);
}
