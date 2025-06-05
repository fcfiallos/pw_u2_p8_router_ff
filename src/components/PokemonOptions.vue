<template>
  <div class="options-container">
    <ul >
      <li v-for="pokemon in pokemons" :key="pokemon.id">{{pokemon.nombre}}</li>
    </ul>
  </div>
  <!-- se genera una comunicacion cuando se presione un elemento de la lista -->
</template>

<script>

export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },  
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
li {
  background: white;
  border-radius: 10px;
  border: 1px solid rgb(0, 162, 226);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
  padding: 5px;
}
.options-container {
  display: flex;
  justify-content: center;
}
li:hover {
  background: rgb(0, 162, 226);
  color: white;
}
</style>