
import React from "react";
import { useState } from "react";

export async function GetPokemonService() {
  		try {
  			const res = await fetch(
  				"https://pokeapi.co/api/v2/pokemon"
  			);
  			const data = await res.json();
        const rand = Math.floor(Math.random() * 20)
        const pokemon = data.results[rand]

        return getPokemonDetails(pokemon.url)

  		} catch (err) {
  			console.log(err);
  		}

      async function getPokemonDetails(path) {
        try {
          const res = await fetch(
            path
          );
          const data = await res.json();
          return data
        } catch (err) {
          console.log(err);
        }
      }
}
