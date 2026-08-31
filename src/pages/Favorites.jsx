import { useContext } from "react"
import { FavoritesContext } from "../contexts/FavoritesContext"
import PokemonCard from "../components/PokemonCard"
import '../css/Favorites.css'

function Favorites(){
    const { favorites } = useContext(FavoritesContext)

    return(
        <div className="favorites-page">
            <h1 className="favorites-title">Favorites</h1>

            {favorites.length === 0 ? (
                <p className="empty-message">No favorite Pokemon yet</p>
            ) : (
                <div className="pokemon-grid">
                    {favorites.map((pokemon) => (
                        <PokemonCard
                            key={pokemon.name}
                            pokemon={pokemon}
                        />
                    ))}
                </div>
            )} 
        </div>
    )


}

export default Favorites