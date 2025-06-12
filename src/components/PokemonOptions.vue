<template>
  {{ mensaje2 }}
  <div class="options-container">
    <ul>
      <li
        @click="comunicarClick(pokemon.id)"
        v-for="pokemon in pokemons"
        :key="pokemon.id"
      >
        {{ pokemon.nombre }}
      </li>
    </ul>
  </div>
  <!-- se genera una comunicacion cuando se presione un elemento de la lista -->
</template>

<script>
// desde cualquier parte no solo desde el metodo se puede usar usando una funcion emit (palabra reservada) lo que hace es que como dice el nombre emite un evento
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
  methods: {
    comunicarClick(id) {
      console.log("click......");
      console.log(id);
      const objetoEnviado = {
        atributo1: id,
        atributo2: "Edison",
        atributo3: true,
      };
      this.$emit("seleccionado", objetoEnviado); //evento del componente
    },
    //cuando se quiere comunicar un dato como segundo argumento se envia ese dato del emit
  },
  data() {
    return {
      mensaje2: "mensaje2",
    };
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