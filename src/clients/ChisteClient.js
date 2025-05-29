import axios from "axios";

const consultarRespuesta = async () =>{
    const consulta = axios.get('https://api.chucknorris.io/jokes/random').then(respuesta => respuesta.data);
    return consulta;
}

export const consultarRespuestaFachada = async () =>{
    return await consultarRespuesta();
}