// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {PokemonRepository} from '/repositories/PokemonRepository'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.query.teamId !== undefined) {
    const data = PokemonRepository.getById(req.query.teamId)
    res.status(200).json(data)
  } else {
    const data = PokemonRepository.getAll()
    res.status(200).json(data)
  }
}
