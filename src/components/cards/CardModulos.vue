<template>
  <v-card
    class="mx-auto"
    max-width="244"
  >
    <div v-if="this.img==='1'">
    <v-img
      :src="require('../../assets/adm.jpg')"
      height="120px"
    ></v-img>
    </div>
    <div v-if="this.img==='2'">
    <v-img
      :src="require('../../assets/cexterna.jpg')"
      height="120px"
    ></v-img>
    </div>
    <div v-if="this.img==='3'">
    <v-img
      :src="require('../../assets/lab.jpg')"
      height="120px"
    ></v-img>
    </div>
    <div v-if="this.img==='4'">
    <v-img
      :src="require('../../assets/seguridad.jpg')"
      height="120px"
    ></v-img>
    </div>
    <v-card-title>
      {{img}}-{{title}}
    </v-card-title>

    <v-card-subtitle>
    </v-card-subtitle>
    
    <v-card-actions>
      <v-btn
        color="#1973a5"
        text
        outlined
        @click="ingresar"
      >
        Ingresar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data(){
      return{
       
      }
    },
    methods: {
      ingresar(){
        if(this.img==="1"){
         console.log("ingresando a", this.img)
        }
        if(this.img==="2"){
         this.$router.push('/ConsultaExterna')
        }
        if(this.img==="3"){
          this.$router.push('/AyudaDiag')
        }
        if(this.img==="4"){
         console.log("ingresando a", this.img)
        }
      }
    },
    props:{
      title: String,
      img: String,
      detalle_titulo: String,
    }, 
  }
</script>