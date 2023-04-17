import {PokemonDataService} from '/services/PokemonDataService'
import ListTable from '/components/table/ListTable'
import { useState, useEffect } from 'react'

export default function TeamList() {
  const [data, setData] = useState([])
  const [types, setTypes] = useState([])

  useEffect(() => {
    PokemonDataService.read()
    .then((res) => res.json())
    .then(data => {
      console.log("data",data)
      data.sort(function(a,b){
        return new Date(b.dateCreated) - new Date(a.dateCreated);
      });
      setData(data)
    })
  }, [])

  if(data.length == 0) {
    return (
      <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
          <p>No data foud</p>
          </div>
        </div>
    )
  }

  return (
    <div>
    {data.map((element) => (
      <ListTable data={element} />
    ))}
    </div>
)
}
