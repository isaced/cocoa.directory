// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { queryLibraries } from './service'; './service';
import { Library, ResponseData } from '../../../types'
import { Query } from '../../../types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const query = req.query as Query;
  const data = queryLibraries(query) as {
    libraries: Library[]
  };

  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  return res.end(
    JSON.stringify(data)
  );
}
