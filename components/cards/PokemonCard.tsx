

export default function PokemonCard(props) {
  return (
    props.name &&
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-96 min-w-min">
      <a href="#">
          <img className="rounded-t-lg" src={props.imageUrl} alt="" />
      </a>
      <div className="p-5">
          <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <b>experienceValue</b>: {props.experienceValue}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <b>types</b>:
            {props.types.map((types) => (
              <p>{String(types.type.name)}</p>
            ))}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <b>abilities</b>:
            {props.abilities.map((abilities) => (
              <p>{String(abilities.ability.name)}</p>
            ))}
          </p>
      </div>
    </div>
  )
}
