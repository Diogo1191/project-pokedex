import { useContext } from 'react'
import '../css/PokemonCard.css'
import {useNavigate} from 'react-router-dom'
import { FavoritesContext } from '../contexts/FavoritesContext'

function PokemonCard({ pokemon }){
    const navigate = useNavigate()
    const { toggleFavorite, isFavorite } = useContext(FavoritesContext)

    const favorite = isFavorite(pokemon.name)

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

    return(
        <div className="pokemon-card">

            <button 
                className='pokemon-card-favorite'
                onClick={() => toggleFavorite(pokemon)}
                aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
                >
                {favorite ? "⭐" : "🌟"}
            </button>

            <p className='pokemon-card-id'>
                #{pokemon.id.toString().padStart(3, "0")}
            </p>

            <img src={pokemon.image} alt={pokemon.name} />

            <h2>{pokemon.name}</h2>

            <div className='pokemon-card-types'>
                {pokemon.types.map(type => (
                    <span 
                        key={type}
                        style={{backgroundColor: typeColors[type]}}
                    >
                        {type}
                    </span>
                ))}
            </div>

            <button 
                className='pokemon-card-button'
                onClick={() => navigate(`/pokemon/${pokemon.id}`)}
            >
                Ver Detalhes
            </button>
        </div>
    )
}

export default PokemonCard