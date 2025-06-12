import axios from "axios";

//https://pokeapi.co/api/v2/pokemon/1
// se crea todo la respuesta a pesar de solo se requiere el nombre (name)
const consumirPokemon = async (id) => {
    const respuesta = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(resp => resp.data);
    return respuesta;
}

// el api no es parte del codigo 
const obtenerObjetoPokemon = async (numero) => {
    const data = await consumirPokemon(numero);
    console.log(data.name);
    const pokemon = {
        nombre: data.name,
        id: data.id,
    }
    return pokemon;
}

const obtenerArregloNumerico = (longitud) => {
    const vector = [];
    for (let i = 0; i < longitud; i++) {
        vector[i] = obtenerAleatorio(1, 600);
    }
    return vector;
}

function obtenerAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const obtenerArreglosPokemon = async (arregloNumerico) => {
    const vector = [];
    for (let numero of arregloNumerico) {
        const objetoPokemon = await obtenerObjetoPokemon(numero);
        vector.push(objetoPokemon);
    }
    return vector;
}

const obtenerOpciones = async (longitud) => {
    const vector = obtenerArregloNumerico(longitud);
    const vectorObjetos = await obtenerArreglosPokemon(vector);
    return vectorObjetos;
}

export const pokemonFachada = async (id) => {
    return await consumirPokemon(id);
}

export const obtenerOpcionesFachada = async (longitud) => {
    return await obtenerOpciones(longitud);
}

export const obtenerAleatorioFachada = (min, max) => {
    return obtenerAleatorio(min, max);
}