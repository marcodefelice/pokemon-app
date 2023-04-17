const fs = require('fs');
let pokemons = require('data/pokemons.json');

export const PokemonRepository = {
    getAll: () => pokemons,
    getById: id => pokemons.find(x => x.id.toString() === id.toString()),
    find: x => pokemons.find(x),
    create,
    update,
    delete: _delete,
    deletePokemon
};

function create(pokemon) {
    //first check if already team name exist
    const pokemonData = pokemons.find(x => x.team_name === pokemon.team_name);
    let pokemoteToSave = {
      team_name : null,
      pokemons: []
    }
    if(pokemonData == null) {
      // generate new pokemon id
      pokemoteToSave.team_name = pokemon.team_name
      pokemoteToSave.id = pokemons.length ? Math.max(...pokemons.map(x => x.id)) + 1 : 1;

      // set date created and updated
      pokemoteToSave.dateCreated = new Date().toISOString();
      pokemoteToSave.dateUpdated = new Date().toISOString();

      pokemoteToSave.pokemons.push(pokemon.pokemons)
      pokemon = pokemoteToSave
      // add and save pokemon
      pokemons.push(pokemon);
    } else {
      pokemonData.pokemons.push(pokemon.pokemons)
      pokemon = pokemonData
    }

    saveData();

}

function update(id, params) {
    const pokemon = pokemons.find(x => x.id.toString() === id.toString());

    // set date updated
    pokemon.dateUpdated = new Date().toISOString();

    // update and save
    Object.assign(pokemon, params);
    saveData();
}

function _delete(id) {
    pokemons = pokemons.filter(x => x.id.toString() !== id.toString());
    saveData();

}

function deletePokemon(id,pokemonId) {
    pokemons = pokemons.filter(x => x.id.toString() ===  id.toString());
    pokemons[0].pokemons = pokemons[0].pokemons.filter(x => x.uuid != pokemonId)

    saveData();
}

function saveData() {
    fs.writeFileSync('data/pokemons.json', JSON.stringify(pokemons, null, 4));
}
