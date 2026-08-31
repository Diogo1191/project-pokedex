const BASE_URL = "https://pokeapi.co/api/v2/pokemon"


const formatPokemon = (data) => ({
        id: data.id,
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
        types: data.types.map(type => type.type.name),
    })


export const getPokemons = async (limit, offset) => {

    const response = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`)

    if(!response.ok) {
        throw new Error("Erro ao obter os dados do Pokemon")
    }

    const data = await response.json()

    const promises = data.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url)

        if(!response.ok){
            throw new Error(`Erro ao obter ${pokemon.name}`)
        }
        
        const details = await response.json()

        return formatPokemon(details)
    })

    const pokemons = await Promise.all(promises)
    
    return pokemons
}


export const getPokemonDetails = async(id) => {
    const response = await fetch(`${BASE_URL}/${id}`)

    if(!response.ok){
        throw new Error("Erro ao obter os dados do Pokemon")
    }

    const data = await response.json()

    return {
        id: data.id,
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
        height: data.height,
        weight: data.weight,
        types: data.types.map(type => type.type.name),
        abilities: data.abilities.map(ability => ability.ability.name),
        stats: data.stats.map(stat => ({
            name: stat.stat.name,
            value: stat.base_stat
        }))
    }
}