import axios from "axios";

//https://pokeapi.co/api/v2/pokemon/1
// se crea todo la respuesta a pesar de solo se requiere el nombre (name)
const consumirPokemon = async (id)=>{
    const respuesta = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(resp => resp.data);
    return respuesta;
}

export const pokemonFachada = async (id)=>{
    return await consumirPokemon(id);
}