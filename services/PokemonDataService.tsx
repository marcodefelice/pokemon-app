
import React from "react";
import { useState } from "react";

export const PokemonDataService = {
    read,
    save,
    update,
    removePokemon
};

async function read(teamid) {
  try {
    let queryString = ""
    if(teamid !== undefined) {
      queryString = "?teamId="+teamid
    }

    return await fetch(
      "http://localhost:3000/api/getPokemon"+queryString
    );
  } catch (err) {
    console.log(err);
  }
}

async function update(teamid,data) {
  try {
    const res = await fetch(
      "http://localhost:3000/api/savePokemon?teamId="+teamid,
      {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST'
      }
    );

    return res

  } catch (err) {
    console.log(err);
  }
}

async function removePokemon(teamid,pokemonId) {
  try {
    const res = await fetch(
      "http://localhost:3000/api/savePokemon?teamId="+teamid+"&pokemonId="+pokemonId,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'DELETE'
      }
    );

    return res

  } catch (err) {
    console.log(err);
  }
}

async function save(data) {
  		try {
  			const res = await fetch(
  				"http://localhost:3000/api/savePokemon",
          {
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST'
          }
  			);

        return res

  		} catch (err) {
  			console.log(err);
  		}
}
