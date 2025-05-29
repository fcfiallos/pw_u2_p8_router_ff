<template>
  <div class="contanier">
    <div v-show="mostrar">
      <h3>Producto Guardado</h3>
    </div>
    <div v-show="mostrarMensaje">
      <p id="mensaje">Error en validar campos productos</p>
    </div>
    <p type="Nombre"><input v-model="nuevoNombre" type="text" /></p>
    <p type="Código"><input v-model="nuevoCodigo" type="text" /></p>
    <p type="Precio"><input v-model="nuevoPrecio" type="text" /></p>
    <p type="Cantidad"><input v-model="nuevoCantidad" type="number" /></p>
    <p type="Fecha de elaboración">
      <input v-model="nuevoFechaElaboracion" type="date" />
    </p>
    <button @click="validarDatos()">Agregar</button>

    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Código</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Fecha de elaboración</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{
            nombre,
            codigo,
            precio,
            cantidad,
            fechaElaboracion,
          } in productos"
          :key="codigo"
        >
          <td>{{ nombre }}</td>
          <td>{{ codigo }}</td>
          <td>{{ precio }}</td>
          <td>{{ cantidad }}</td>
          <td>{{ fechaElaboracion }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrar: false,
      mostrarMensaje: false,
      nuevoNombre: "",
      nuevoCodigo: "",
      nuevoPrecio: "",
      nuevoCantidad: "",
      nuevoFechaElaboracion: "",
      productos: [
        {
          nombre: "Aceite 900ml",
          codigo: "P001",
          precio: 2.5,
          cantidad: 10,
          fechaElaboracion: "2023-10-01",
        },
        {
          nombre: "Arroz 1kg",
          codigo: "P002",
          precio: 3.2,
          cantidad: 20,
          fechaElaboracion: "2023-10-05",
        },
        {
          nombre: "Azúcar 500g",
          codigo: "P003",
          precio: 0.8,
          cantidad: 15,
          fechaElaboracion: "2023-10-10",
        },
        {
          nombre: "Sal 1kg",
          codigo: "P004",
          precio: 0.5,
          cantidad: 25,
          fechaElaboracion: "2023-10-15",
        },
      ],
    };
  },
  methods: {
    agregarProducto() {
      this.productos.push({
        nombre: this.nuevoNombre,
        codigo: this.nuevoCodigo,
        precio: this.nuevoPrecio,
        cantidad: this.nuevoCantidad,
        fechaElaboracion: this.nuevoFechaElaboracion,
      });
      this.limpiarCampos();
    },
    limpiarCampos() {
      this.nuevoNombre = "";
      this.nuevoCodigo = "";
      this.nuevoPrecio = "";
      this.nuevoCantidad = "";
      this.nuevoFechaElaboracion = "";
    },
    validarDatos() {
      if (
        this.nuevoNombre === "" ||
        this.nuevoCodigo === "" ||
        this.nuevoPrecio === "" ||
        this.nuevoCantidad === "" ||
        this.nuevoFechaElaboracion === ""
      ) {
        this.mostrarMensaje = true;
        setTimeout(() => {
          this.mostrarMensaje = false;
        }, 3000);
      } else {
        this.mostrarMensaje = false;
        this.agregarProducto();
        this.mostrar = true;
        setTimeout(() => {
          this.mostrar = false;
        }, 3000);
      }
    },
  },
};
</script>

<style scoped>
.contanier {
  background: #e0e0e0;
  padding: 10px;
  margin: 10px auto;
  width: 80%;
}
p::before {
  content: attr(type);
  font-weight: bold;
  color: #333;
  display: block;
  padding: 5px;
}
p {
  text-align: left;
  margin: 15px 20px;
}
input {
  padding: 10px 5px;
  width: 100%;
  margin-right: 20px;
  border: none;
  border-bottom: cyan solid 2px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #00028d;
}
input:focus {
  outline: none;
  border-bottom: #00a098 solid 2px;
}
button {
  background: #4c58fa;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin: 15px;
  font-size: 20px;
  width: 200px;
}
#mensaje {
  color: #bb0101;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}
table {
  margin: 10px auto;
  border-collapse: separate;
  overflow: hidden;
  width: 100%;
  background: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
thead,
th {
  background: #1014fd;
  color: #fff;
  border-radius: 10px;
  padding: 10px;
}
tbody,
td {
  padding: 10px;
  border-bottom: 1px solid #666;
}
tr:hover{
    background: #00a098;
    color: #fff;
}
</style>