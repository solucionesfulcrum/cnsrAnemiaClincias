<template>
<v-card
    class="justify-content-star"
    height="1000"
    width="220"
  >
    <v-navigation-drawer
      permanent
      width="100%"
    >
      <v-row
        class="fill-height"
        no-gutters
      >
        <v-navigation-drawer
          dark
          mini-variant
          mini-variant-width="56"
          permanent
          color="#1973a5"
        >
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img  :src="require('../../assets/logo_mini.png')" ></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-divider></v-divider>

          <v-list
            dense
            nav
          >
            <v-list-item
              v-for="item in items"
              :key="item.title"
            >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-list class="grow">
          <v-list-item
            v-for="link in links"
            :key="link"
            link
          >
            <v-list-item-title v-text="link"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-row>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data(){
      return{
        items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
        ],
        links: ['Home', 'Contacts', 'Settings'],
        mini: true,
      }
    },
    methods: {
       
    },
  }
</script>