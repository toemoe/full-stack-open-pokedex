import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const PokemonPage = ({ previous, next }) => {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => setPokemon(response.data))
  }, [name])

  if (!pokemon) return null

  return (
    <>
      {(previous || next) && (
        <div className="links">
          {previous && (
            <a href={`/pokemon/${previous.name}`}>
              Previous
            </a>
          )}

          {next && (
            <a href={`/pokemon/${next.name}`}>
              Next
            </a>
          )}
        </div>
      )}

      <div className={`pokemon-page pokemon-type-${pokemon.types[0].type.name}`}>
        <div
          className="pokemon-image"
          style={{
            backgroundImage: `url(${pokemon.sprites.front_default})`,
          }}
        />

        <div className="pokemon-info">
          <div className="pokemon-name">
            {pokemon.name}
          </div>

          <div className="pokemon-stats" data-testid="stats">
            <table>
              <tbody>
                {pokemon.stats.map(s => (
                  <tr key={s.stat.name}>
                    <td className="pokemon-stats-name">
                      {s.stat.name}
                    </td>
                    <td className="pokemon-stats-value">
                      {s.base_stat}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pokemon-abilities">
            {pokemon.abilities.map(a => (
              <div key={a.ability.name} className="pokemon-ability">
                <div className="pokemon-ability-type">
                  {a.is_hidden ? 'Hidden ability' : 'Ability'}
                </div>

                <div className="pokemon-ability-name">
                  {a.ability.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonPage
