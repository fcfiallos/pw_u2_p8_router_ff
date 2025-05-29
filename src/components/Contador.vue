<template>
  <div class="contanier">
    <h1>{{ title }}</h1>
    <!--eleemnto html sub exponencial-->
    <p>{{ this.numero }} <sup>2</sup>= {{ calCuadrado }}</p>
    <div>
      <button v-on:click="incrementar()">+1</button>
      <button @click="decrementar()">-1</button>
    </div>
    <!--<p>{{ this.numero }} <sup>2</sup>= {{calCuadrado}}</p>
    <p>{{ this.numero }} <sup>2</sup>= {{calCuadrado}}</p>
    <p>{{ this.numero }} <sup>2</sup>= {{calCuadrado}}</p>
    <p>{{ this.numero }} <sup>2</sup>= {{calCuadrado}}</p>
    <p>{{ numero + 1 }}</p>
    <p>{{ texto }}</p>
    <p>{{ activo }}</p>
    <p>{{ usuario.edad }}</p>
    <p>{{ arreglo }}</p>
    1+1
    {{ 1 + 1 }}
    true?'Es verdadero':'Es falso'
    {{ false ? "Es verdadero" : "Es falso" }}-->
  </div>
</template>

<script>
export default {
  /**esas opciones openvia son como metodos
  props: ["title", "value"],*/
  props:{
    title:String,
    value:{
      type:Number,
      required:false, /**significa que es obsolutamente necesario */
      default:100,
      validator(value) {
        return value > 0;
      },
    },
    p1:Boolean,
    p2:Array,
    p3:Object,
    p4:Function,
    p5:Date,
    p6:Symbol,/**Cuando se quieren enviar tokens */
  },
  data() {
    /*propiedades reactivas */
    return {
      numero: this.value,
      titulo: "Contador",
      activo: true,
      usuario: {
        nombre: "Fátima",
        edad: "22",
        genero: "F",
      },
      arreglo: ["Azul", "Amarrillo"],
    };
  },
  methods: {
    calcularCuadrado() {
      console.log("Entro al metodo");
      return this.numero * this.numero;
    },
    incrementar() {
      this.numero++;
    },
    decrementar() {
      this.numero--;
    },
  },
  computed: {
    calCuadrado() {
      console.log("Entro propiedad computada");
      return this.numero * this.numero;
    },
  },
  /**Ciclo de vida */
  created(){
    if(this.value > 0){
      console.log('Es correcto');
    }else{
      throw new Error('Error el valor no puede ser menor que cero')
    }
  }
};
</script>

<style>
</style>