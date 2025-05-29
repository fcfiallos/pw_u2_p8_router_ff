<template>
  <div class="container">
    <h1>¿Quiéres leer un chiste?</h1>
    <input v-model="pregunta" type="text" placeholder="Escribe tu respuesta" />
    <p>Recuerda tu respuesta debe incluir un "si"</p>
    <div class="mensaje" v-if="esNo">
      <p>{{ mensaje }}</p>
    </div>
    
    <div class="container-chiste" v-if="esSi">
      <p>{{ chiste }}</p>
      <img v-if="imagen" :src="imagen" alt="No se pudo cargar" />
    </div>

  </div>
</template>

<script>
import { consultarRespuestaFachada } from "@/clients/ChisteClient.js";
export default {
  data() {
    return {
      chiste: null,
      imagen: null,
      esSi: false,
      pregunta: null,
      mensaje:null,
      esNo:false,
    };
  },
  watch: {
    pregunta(value, oldValue) {
      const preg = value.toUpperCase();
      this.esSi = false;
      this.esNo = false;
      if (preg.includes("SI")) {
        this.esSi = true;
        console.log("valor actual: " + value);
        console.log("valor anterior: " + oldValue);
        //Es decir entro de aqui se debe consultar el api
        this.consumirAPI();
      } else if(preg.includes("NO")) {
        this.esNo = true;
        this.mensaje = "Como respondiste no, no te dare un chiste";
      } 
    },
  },
  methods: {
    async consumirAPI() {
      this.chiste = "Pensando......";
      const resp = await consultarRespuestaFachada();
      console.log(resp);
      console.log(resp.icon_url);
      console.log(resp.value);
      this.chiste = resp.value;
      this.imagen = resp.icon_url;
    },
  },
};
</script>

<style scoped>
.container {
  background: #fff;
  width: 75%;
  margin: 20px auto;
  padding: 5px;
  border-radius: 20px;
}
input {
  background: #fff;
  border: 2px solid #02ccff;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  font-size: 20px;
}
input:focus{
  outline: none;
  border: 2px solid #0059ff;
}
.container-chiste {
  background: #00ffb3;
  width: 75%;
  margin: 20px auto;
  padding: 5px;
  border-radius: 20px;
  font-size: 20px;
  color: #000;
}
img{
  width: 200px;
  height: auto;
}
.mensaje{
  background: #a200ff;
  color: #fff;
  font-size: 18px;
  text-align: center;
  padding: 10px;
  width: 50%;
  margin: 10px auto;
  border-radius: 5px;
}
</style>