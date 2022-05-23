// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { queryLibraries } from './service'; './service';
type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.json(queryLibraries());
}
