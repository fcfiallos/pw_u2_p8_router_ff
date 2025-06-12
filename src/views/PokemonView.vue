<template>
  <h1>Selecciona el Pokemon correcto</h1>
  <h1>{{ mensaje }}</h1>
  <PokemonImage
    v-if="pokemon"
    :pokemonId="pokemon.id"
    :mostrar-imagen="mostrar" ref="miHijo1"
  />
  <!--es un alias de vue-->
  <PokemonOptions
    @seleccionado="recibioPadre($event)"
    :pokemons="vectorPokemon" ref="miHijo2"
  />
  <button @click="comunicarHijo()">Comunicar hijo</button>
</template>
 
<script>
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import {
  obtenerOpcionesFachada,
  obtenerAleatorioFachada,
} from "@/clients/PokemonClient";
export default {
  data() {
    return {
      vectorPokemon: [],
      pokemon: null,
      mostrar: false,
      mensaje: null,
    };
  },
  components: {
    PokemonImage,
    PokemonOptions,
  },
  // envia la respuesta al padre con un evento y envia la resspuesta al otro componente mediante un props con propiedad reactiva
  //a veces se necesita que se envie datos relevantes al padre
  methods: {
    async iniciarJuego() {
      const opciones = await obtenerOpcionesFachada(8);
      this.vectorPokemon = opciones;
      console.log(this.vectorPokemon);

      // elegir un pokemon de los 4
      let pokemonCorrecto = obtenerAleatorioFachada(
        0,
        this.vectorPokemon.length
      ); //indice correcto
      this.pokemon = this.vectorPokemon[pokemonCorrecto];
    },
    recibioPadre(id) {
      console.log("Mensaje recibido desde hijo");
      console.log(id);
      this.mostrar = true;
      this.validarRespuesta(id.atributo1);
    },
    // se recibe el segundo dato usanod una palabra $event
    validarRespuesta(opcionSeleccionada) {
      if (opcionSeleccionada === this.pokemon.id) {
        this.mensaje = "Correcto";
      } else {
        this.mensaje = "Perdiste el correcto es: " + this.pokemon.nombre;
      }
    },
    //segunda forma de comunicacion
    //evento ref se lo coloca desde cualquier componente padre consiste en que el padre manda mensajes a los hijos
    //cuando se le da un alias se puede acceder a las propiedades reactivas del hijo donde se puede acceder a su valor original y modificar su valor
    comunicarHijo(){
      console.log(this.$refs.miHijo1.mensaje1);
      this.$refs.miHijo1.mensaje1 = "nuevo mensaje 1";

      console.log(this.$refs.miHijo2.mensaje2);
      this.$refs.miHijo2.mensaje2 = "nuevo mensaje 2";
    }
  },
  mounted() {
    this.iniciarJuego();
  },
};
</script>
 
<style>
</style>