import { useState, useEffect } from 'react'

export default function ListTable(props) {
  const [types, setTypes] = useState([])
  const [filterTypes, setFilterTypes] = useState([])
  const [totalExperence, setTotalExperence] = useState(0)

  useEffect(() => {
    let types = ['all']
    let totalExperence = 0
    props.data.pokemons.forEach(pokemon => {

        totalExperence = totalExperence +  pokemon.base_experience

        pokemon.types.forEach((type) => {
          if(!types.includes(type.type.name)) {
            types.push(type.type.name)
          }
        });
    });

    setTypes(types)
    setTotalExperence(totalExperence)

  },[]);

  function mathTotalExperence() {
    props.data.pokemons.forEach(pokemon => {
    });

    setTypes(types)

  }

  function handleChangeType() {
    let type = document.querySelector('#type').value;
    console.log(type)
    setFilterTypes(type)
  }

  function checkTypes(types) {
    let result = false
    types.forEach(element => {
      if(element.type.name == filterTypes) {
        result = true
      }
    });

    if(filterTypes.length === 0 || filterTypes == 'all') {
      result = true
    }

    return result
  }

  return (
    <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
            <div>
                <h2 className="text-2xl font-semibold leading-tight">Team name: {props.data.team_name}</h2>
                <h3 className="text-1xl font-semibold leading-tight">Total experience: {totalExperence} </h3>
                <h4><a href={'/team/'+props.data.id+'/edit'}>Edit team </a></h4>
            </div>
            <div className="my-2 flex sm:flex-row flex-col">
                <div className="flex flex-row mb-1 sm:mb-0">
                    <div className="relative">

                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                    <div className="relative">
                        <select
                            onChange={handleChangeType}
                            id="type"
                            className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                            {types.map((type, index) => (
                              <option key={index} value={type}>{type}</option>
                            ))}
                        </select>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Pokemons
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Total experiences
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Types
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                        {props.data.pokemons.map((pokemon, index) => (
                          checkTypes(pokemon.types) === true &&
                          <tr key={index}>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  <div className="flex items-center">
                                      <div className="flex-shrink-0 w-10 h-10">
                                          <a href={'/team/'+props.data.id+'/edit'}>
                                            <img className="w-full h-full rounded-full"
                                              src={pokemon.image.front_default}
                                              alt="" />
                                            </a>
                                      </div>
                                  </div>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  <p className="text-gray-900 whitespace-no-wrap">{pokemon.base_experience}</p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                  {pokemon.types.map((type, index) => (
                                    <span key={index}>{type.type.name} </span>
                                  ))}
                                  </p>
                              </td>
                          </tr>

                        ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}
