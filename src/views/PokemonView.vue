<template>
    <h1>Selecciona el Pokemon correcto</h1>
  <pokemon-image :pokemonId="50" :mostrar-imagen="true"/> <!--es un alias de vue-->
  <PokemonOptions />
  <!--dado un numero especifico del 1 al 600 nos retornara un pokemon con su imagen y nombre-->
  <!--son dos componentes independientes que se comunicaran entre ellos-->
  <!--los componentes deben tener un objetivo y función clara -->
</template>

<script>
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
export default {
  components: {
    PokemonImage,
    PokemonOptions,
  },
};
</script>

<style>
</style>