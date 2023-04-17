import { useState, useEffect } from 'react'
import Router from 'next/router'
import {PokemonDataService} from '/services/PokemonDataService'

export default function RemovePokemon(props) {
  const pokemonId = props.pokemon_id
  const teamId = props.team_id

  function handleClick() {
    const teamName = document.querySelector('#newteam').value
    PokemonDataService.removePokemon(teamId,pokemonId)
    .then((res) => res.json())
    .then(res => {
      console.log(res)
    })
    Router.reload(window.location.pathname)
  }

  return (
      <button onClick={handleClick} type="button" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
  )
}
