<template>
    <div>
      <NavBar/>
      <div>
          <v-container grid-list-md>
            <v-layout row wrap d-flex align-center>
              <v-flex xs12 sm3>
         <div>
                    <CardModulos title="Admision y Citas" detalle_titulo="Citas, Cupos relacionados a pacientes" img="1"/>
                  </div>
              </v-flex>
              <v-flex xs12 sm3>
                  <div>
                    <CardModulos title="Consulta Externa" detalle_titulo="Todo lo relacionado a la atención del Paciente" img="2"/>
                  </div>
              </v-flex>
              <v-flex xs12 sm3>
                  <div>
                    <CardModulos title="Laboratorio" detalle_titulo="Ver resultados Masivos relacionados a Laboratorio" img="3"/>
                  </div>
              </v-flex>
              <v-flex xs12 sm3>
                  <div>
                    <CardModulos title="Seguridad" detalle_titulo="Gestiona los Accesos al sistema para los usuarios" img="4"/>
                  </div>
              </v-flex>
            </v-layout>
          </v-container>
      </div>
    </div>
</template>

<script>
  import NavBar from '../components/navbar/NavBar.vue'
  import CardModulos from '../components/cards/CardModulos.vue'  
  import NavBarVertical from '../components/navbar/NavBarVertical.vue'
  
//require('../../assets/lab.jpg'),
  export default {
    data(){
      return{
         dialog: false,
      }
    },
     mounted() {
      if(!localStorage.getItem('keyValue')){
       this.$router.push('/')
      }
    },
    methods: {
       actionOut(){
         this.dialog=false
         this.$router.push('/')
       },
    },
    components: {
        NavBar,
        CardModulos,
        NavBarVertical,
    },
  }
</script>