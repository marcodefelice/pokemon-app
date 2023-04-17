import { useState, useEffect } from 'react'
import {GetPokemonService} from '/services/GetPokemonService'
import PokemonCard from '/components/cards/PokemonCard'
import {PokemonDataService} from '/services/PokemonDataService'
import { useRouter } from 'next/router'

export default function GottaCatch(props) {
  const [name, setName] = useState(null)
  const [errors, setErrors] = useState(null)
  const [experienceValue, setExperienceValue] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  const [types, setTypes] = useState([])
  const [abilities, setAbilities] = useState([])
  const router = useRouter()

  function handleClick() {
    setErrors(null)
    let teamName = props.tram_name
    if(teamName == undefined) {
       teamName = document.querySelector('#newteam').value
    }

    if(teamName != "") {
        let pokemon
        GetPokemonService().then(res => {
          setName(res.name)
          setExperienceValue(res.base_experience)
          setImageUrl(res.sprites.front_default)
          setTypes(res.types)
          setAbilities(res.abilities)

          let dataToSave = {
            team_name : teamName,
            pokemons : {
              uuid: Math.floor(Math.random() * 100000),
              name: res.name,
              base_experience: res.base_experience,
              image: res.sprites,
              types: res.types,
              abilities: res.abilities
            }
          }

        PokemonDataService.save(dataToSave)
      })

      } else {
        setErrors("Team name not be empty")
      }
      // router.reload()
  }

  return (
    <div>
      <button onClick={handleClick} type="button" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Gotta Catch 'Em All</button>
      <PokemonCard
      name={name}
      experienceValue={experienceValue}
      imageUrl={imageUrl}
      types={types}
      abilities={abilities}
      />
      {errors && <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong class="font-bold">{errors}</strong>
      </div>}
    </div>


  )
}
