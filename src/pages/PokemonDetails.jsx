import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPokemonDetails } from "../services/api"
import '../css/PokemonDetails.css'

function PokemonDetails(){
    const { id } = useParams()
    const [pokemon, setPokemon] = useState(null)

    const typeColors = {
        fire: "#F08030",
        water: "#6890F0",
        grass: "#78C850",
        electric: "#F8D030",
        poison: "#A040A0",
        bug: "#A8B820",
        normal: "#A8A878",
        flying: "#A890F0",
        ground: "#E0C068",
        psychic: "#F85888",
        rock: "#B8A038",
        ghost: "#705898",
        ice: "#98D8D8",
        dragon: "#7038F8",
        dark: "#705848",
        steel: "#B8B8D0",
        fairy: "#EE99AC"
    }

    useEffect(() => {
        getPokemon()
    }, [id])

    const getPokemon = async() => {
        const data = await getPokemonDetails(id)
        setPokemon(data)
    }

    if(!pokemon) {
        return <p>A carregar...</p>
    }

    return(
        <div className="pokemon-details">

            <section className="pokemon-details-card">
                <p className="pokemon-details-id">
                    #{pokemon.id.toString().padStart(3, "0")}
                </p>

                <h1>{pokemon.name}</h1>

                <img src={pokemon.image} alt={pokemon.name}/>
                
                <div className="pokemon-details-types">
                    {pokemon.types.map(type => (
                        <span key={type} style={{backgroundColor: typeColors[type]}}>{type}</span>
                    ))}
                </div>

                <div className="pokemon-details-measurements">
                    <div>
                        <span>Height</span>
                        <strong>{pokemon.height}</strong>
                    </div>

                    <div>
                        <span>Weight</span>
                        <strong>{pokemon.weight}</strong>
                    </div>
                </div>
            </section>

            <section className="pokemon-details-section">
                <h2>Abilities</h2>

                <div className="pokemon-abilities">
                    {pokemon.abilities.map(ability => (
                        <span key={ability}>{ability}</span>
                    ))}
                </div>
            </section>
            
            <section className="pokemon-details-section">
                <h2>Stats</h2>

                <div className="pokemon-stats">
                    
                    {pokemon.stats.map(stat => (

                        <div className="stat-row">
                            <div className="stat-header">
                                <span>{stat.name}</span>
                                <span>{stat.value}</span>
                            </div>

                            <div className="stat-bar">
                                <div 
                                    className="stat-fill"
                                    style={{ width: `${stat.value}%`}}
                                    />
                            </div>
                        </div>
                    ))}
                </div>
            </section>



        </div>
    )
}

export default PokemonDetails