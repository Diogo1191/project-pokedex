import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext(null)

const FavoritesProvider = ({children}) => {
    const [favorites, setFavorites] = useState(() => {
        const storedFav = localStorage.getItem("favorites")

        return storedFav ? JSON.parse(storedFav) : []
    })

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    const toggleFavorite = (pokemon) => {
        setFavorites(prev => {
            const exists = prev.some(
                fav => fav.name === pokemon.name
            )

            if(exists){
                return prev.filter(fav => fav.name !== pokemon.name)
            }

            return [...prev, pokemon]
        })
    }

    const isFavorite = (pokemonName) => {
        return favorites.some(fav => fav.name === pokemonName)
    }

    return (
        <FavoritesContext.Provider value={{favorites, toggleFavorite, isFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesProvider