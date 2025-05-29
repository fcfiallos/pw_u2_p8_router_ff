<template>
  <div class="container">
    <div v-show="mostrar">
      <h1>Estudiante Guardado</h1>
    </div>
    <label for="id_nombre">Nombre:</label>
    <input v-model="nuevoNombre" id="id_nombre" type="text" />
    <label for="id_apellido">Apellido:</label>
    <input v-model="nuevoApellido" id="id_apellido" type="text" />
    <label for="id_cedula">Cedula:</label>
    <input v-model="nuevoCedula" id="id_cedula" type="text" />
    <label for="id_telefono">Tel. Celular:</label>
    <input v-model="nuevoTelefono" id="id_telefono" type="text" />
    <label for="id_direccion">Dirección:</label>
    <input v-model="nuevoDireccion" id="id_direccion" type="text" />
    <button v-on:click="agregarEstudiante()">Agregar</button>
    <ul>
      <!--El error es porque pide un identificador (ej.: cedula)-->
      <li
        v-for="{ nombre, apellido, cedula, telefono, direccion } in lista"
        :key="nombre"
      >
        Nombre: {{ nombre }} - Apellido: {{ apellido }} - Cedula: {{ cedula }} -
        Telefono: {{ telefono }} - Direccion: {{ direccion }}
      </li>
    </ul>
    <button @click="obtenerPathVariable()">Path Variable</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoNombre: "",
      nuevoApellido: "",
      nuevoCedula: "",
      nuevoTelefono: "",
      nuevoDireccion: "",
      lista: [
        {
          nombre: "Fátima",
          apellido: "Fiallos",
          cedula: "123456789",
          telefono: "0987654321",
          direccion: "Calle 123",
        },
        {
          nombre: "Daniel",
          apellido: "Fiallos",
          cedula: "087654321",
          telefono: "0987654321",
          direccion: "Calle 456",
        },
        {
          nombre: "Pedro",
          apellido: "Teran",
          cedula: "123456789",
          telefono: "0987654321",
          direccion: "Calle 789",
        },
        {
          nombre: "Andrea",
          apellido: "Fiallos",
          cedula: "123456789",
          telefono: "0987654321",
          direccion: "Calle 101",
        },
        {
          nombre: "Carlos",
          apellido: "Castillo",
          cedula: "123456789",
          telefono: "0987654321",
          direccion: "Calle 102",
        },
        {
          nombre: "Ana",
          apellido: "Tobar",
          cedula: "123456789",
          telefono: "0987654321",
          direccion: "Calle 103",
        },
        {
          nombre: "Viviana",
          apellido: "Lopez",
          cedula: "123456789",
          telefono: "0987654321",
          direccion: "Calle 104",
        },
      ],
      mostrar: false,
    };
  },
  methods: {
    agregarEstudiante() {
      /**this.lista.unshift(nuevo);agrega al inicio */
      this.lista.push({
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
        cedula: this.nuevoCedula,
        telefono: this.nuevoTelefono,
        direccion: this.nuevoDireccion,
      }); //agrega al final
      this.mostrar = true;
      this.nombre = null;

      setTimeout(() => {
        this.mostrar = false;
      }, 3000); //milisegundos
    },
    obtenerPathVariable() {
      const cedula = this.$route.params.cedula;
      console.log(cedula);
      const anio = this.$route.query.anio;
      console.log(anio);
      const mes = this.$route.query.mes;
      console.log(mes);
    },
  },
};
</script>

<style scoped>
.container {
  background: #e2e2e2;
  border: 2px solid #00a050;
  border-radius: 12px;
  max-width: 80%; /**maximo de display */
  margin: 50px auto;
  padding: 30px 40px;
}

label {
  display: block;
  color: #333;
  text-align: left;
}

input {
  background: #fff;
  color: #00a050;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 3px solid #a4c5f7;
  padding: 10px 5px;
  margin-right: 20px;
}
button {
  background: #fff;
  color: #00a050;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  width: 100px;
}
ul {
  list-style: none; /**quita los puntos de la lista que teine por defecto */
  margin-top: 30px;
}
li {
  background: #b8d5ff;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  color: #333;
  font-size: 20px;
}
</style>