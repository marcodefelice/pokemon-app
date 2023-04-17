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

  switch (req.method) {
    case 'DELETE':
      const data = PokemonRepository.deletePokemon(req.query.teamId, req.query.pokemonId)
      res.status(200).json(req.body)
      break;
    case 'POST':
      if(req.query.teamId !== undefined) {
        const data = PokemonRepository.update(req.query.teamId, req.body)
        res.status(200).json(req.body)
      } else {
        PokemonRepository.create(req.body)
        res.status(200).json(req.body)
      }
      break;

    default:
      break;
  }


}
