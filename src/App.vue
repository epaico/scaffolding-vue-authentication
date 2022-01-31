<template>
  <v-app>

    <v-app-bar
        app
        color="#0C2659"
        dark
    >

      <v-toolbar-title>Inicio</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
          color="white"
          outlined
          @click="logout"
          v-if="this.$store.getters.isAuthenticated"
      >
        Cerrar Session
      </v-btn>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import axios from 'axios';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  created() {
    axios.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      if (error.response.status === 401) {
        this.$router.push('/login');
      }
      return Promise.reject(error);
    });
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  }
};
</script>
