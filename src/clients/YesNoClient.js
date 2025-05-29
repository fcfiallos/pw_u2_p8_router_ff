import axios from 'axios';

const consultarRespuesta = async () => {
    //esta api se puede usar el verbo get (solo hacer consulta)
    //r declara sobre la respuesta
    // siemrep que se hace un peticion se esepra una respuesta (await) y el metodo que lo interpreta es async eso se usa en todos los metodos de api
    // tienen incluido el await = axios
    const consulta = axios.get('https://yesno.wtf/api').then(rpt => rpt.data);
    console.log(consulta);
    return consulta;
}

// se necesita un metodo fachada  ya que no es buena rpactica consumirla directamente
// se expone como fachada pero llama a la fucnion interna 
// tambien debe tener la espera cada que se le vuelva a llamar 
export const consultarRespuestaFachada = async () => {
    return await consultarRespuesta();
}