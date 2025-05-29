<template>
  <div class="container">
    <img v-if="image" :src="image" alt="No se pudo cargar" />
    <div class="container-2"></div>
    <div class="pregunta-container">
      <input
        v-model="pregunta"
        type="text"
        placeholder="Hazme una pregunta"
      /><!--una idea de que se debe poner en el input-->
      <p>Recuerda terminar con un signo de pregunta (?)</p>
      <div v-if="esValida">
        <h2>{{ pregunta }}</h2>
        <h1>{{ respuesta }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
// en las llaves se pone los metodos que se quieren usar, por ello en los metodos se usa el export
import { consultarRespuestaFachada } from "@/clients/YesNoClient.js";
export default {
  data() {
    return {
      pregunta: null, //pregunta
      respuesta: null, //api
      image: null,
      esValida: false,
    };
  },
  //cuando no son method no hace falta poner async
  watch: {
    //permite observar los cambio de mi propiedad reactiva
    pregunta(value, oldValue) {
      this.esValida = false;
      if (value.includes("?")) {
        this.esValida = true;
        // si el valor incluye el signo
        console.log("valor actual: " + value);
        console.log("valor anterior: " + oldValue);
        //Es decir entro de aqui se debe consultar el api
        this.consumirAPI();
      }
    },
  },
  methods: {
    async consumirAPI() {
      this.respuesta = "Pensando......";
      // es un metodo async por ende se necita que se quede esperando
      const resp = await consultarRespuestaFachada();
      console.log(resp);
      console.log(resp.image);
      console.log(resp.answer);
      console.log(resp.forced); //esto se puede desestructurar
      this.respuesta = resp.answer;
      this.image = resp.image;
    },
  },
};
</script>

<style scoped>
.container-2,
img {
  height: 100vh; /*El anho y alto */
  left: 0px;
  max-width: 100%;
  max-height: 100%;
   /**position: fixed;no respeta la posicion y pasa a ser una marca de agua y el resto de elemmento no tiene efecto */
  top: 0px;
  width: 100vw; /**todo el ancho y largo  */
}

.container-2 {
  background-color: rgba(0, 0, 0, 0.5);
}

.pregunta-container {
  position: relative; /**indpendiente a los elementos que existan el la pagina web los va poner en primero posicion  */
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  margin: 70px;
}

input:focus {
  outline: none;
}
p {
  color: white;
  font-size: 25px;
}
h1,
h2 {
  color: white;
}
h2 {
  margin-top: 160px;
}
</style>