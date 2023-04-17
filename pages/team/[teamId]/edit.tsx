import { useRouter } from 'next/router'
import GottaCatch from '/components/buttons/GottaCatch'
import AddNewTeam from '/components/buttons/AddNewTeam'
import ChangeTeamName from '/components/buttons/ChangeTeamName'
import PokemonCard from '/components/cards/PokemonCard'
import {PokemonDataService} from '/services/PokemonDataService'
import RemovePokemon from '/components/buttons/RemovePokemon'

import { useState, useEffect } from 'react'

export default function TeamEdit() {
  const router = useRouter()
  const {teamId} = router.query
  const [data, setData] = useState([])

  useEffect(() => {
    if(!teamId) {
      return
    }
    PokemonDataService.read(teamId)
    .then((res) => res.json())
    .then(data => {
      console.log(data)
      setData(data)
    })
  }, [teamId])

  return (
    data.length != 0 &&
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <p>Team name: {data.team_name}</p>
      <AddNewTeam></AddNewTeam>
      <GottaCatch tram_name={data.team_name}></GottaCatch>
      <ChangeTeamName teamId={data.id}></ChangeTeamName>

      <div class="container mx-auto mt-10">

      {data.pokemons.map((pokemon) => (
        <div className="float-left ml-2 mb-4">
          <PokemonCard
          name={pokemon.name}
          experienceValue={pokemon.base_experience}
          imageUrl={pokemon.image.front_default}
          types={pokemon.types}
          abilities={pokemon.abilities}
          />
          <RemovePokemon team_id={data.id} pokemon_id={pokemon.uuid}/>
        </div>

      ))}

      </div>


    </main>
  )
}
