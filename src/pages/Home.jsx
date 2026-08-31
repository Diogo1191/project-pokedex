import { useState, useEffect } from "react"
import PokemonCard from "../components/PokemonCard"
import { getPokemons } from "../services/api"
import '../css/Home.css'

function Home(){
    const [pokemons, setPokemons] = useState([])
    const [search, setSearch] = useState("")
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const LIMIT = 20

    useEffect(() => {
        loadPokemons(offset)
    }, [offset])

    const loadPokemons = async(offset) => {
        setLoading(true)
        setError(null)

        try{
            const pokemonList = await getPokemons(LIMIT, offset)
            setPokemons(prev => {
                const existingNames = new Set(
                    prev.map(p => p.name)
                )

                const newPokemons = pokemonList.filter(
                    p => !existingNames.has(p.name)
                )
                return [...prev, ...newPokemons]
            })
            
            
        } catch (err){
            setError("Unable to load Pokemons")
        }  finally{
            setLoading(false)
        }
    }

    const filteredPokemons = pokemons.filter((pokemon) => (
        pokemon.name.toLowerCase().includes(search.toLowerCase())
    ))

    const handleLoadMore = () => {
        setOffset(prev => prev + LIMIT)
    }

    

    return(
        <div className="home">
            <h1 className="home-title">Pokedex</h1>

            <div className="search-container">
                <input 
                    className="search-input"
                    type="text"
                    placeholder="Search Pokemon..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                >
                </input>
            </div>

            {error && (
                <p className="error-message">No Pokemon found</p>
            )}

            <div className="pokemon-grid">
                {filteredPokemons.length === 0 ? (
                    <p className="empty-message">No Pokemon found</p>
                ) : (
                filteredPokemons.map((pokemon) => (
                    <PokemonCard 
                        key={pokemon.name} 
                        pokemon={pokemon}  
                    />
                ))
                )}

            </div>

            <button 
                className="load-more-button"
                onClick={handleLoadMore}
                disabled={loading}
            >
                {loading ? "Loading..." : "Load More..."}
            </button>

        </div>

    )
}

export default Home