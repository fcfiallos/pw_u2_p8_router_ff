<template>
  <!--La mision del componente es mostrar la imagen-->
  <div class="image-container">
    <img
      v-if="!mostrar"
      class="ocultar"
      :src="imagenFuente"
      alt="No se puede renderizar la imagen"
    />
    <img
      v-if="mostrar"
      :src="imagenFuente"
      alt="No se puede renderizar la imagen"
    />
  </div>
  <!--dado un numero dara una imagen especifica-->
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    mostrarImagen:{
      type: Boolean,
      required:true,
      default: false,
    }
  },
  data() {
    return {
      mostrar: this.mostrarImagen,
    };
  },
  //para hacer lo mas generico la imagene debe retornar la url completa 
  computed: {
    imagenFuente() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
img {
  height: 200px;
  position: absolute;
  right: 42%;
}
.ocultar {
  filter: brightness(0);
}
.image-container {
  height: 200px;
}
</style>