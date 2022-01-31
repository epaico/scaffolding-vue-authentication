<template>
  <v-container>
    <v-row
        justify="center"
        class="ma-4"
    >
      <h2 class="grey--text">Acceso a Control Personal</h2>
    </v-row>

    <v-row
        justify="center">
      <v-col
          xs="12"
          sm="6"
          md="6"
          lg="4"
      >
        <FormLogin></FormLogin>
      </v-col>
    </v-row>

  </v-container>

</template>

<script>

import FormLogin from "@/components/auth/FormLogin";

export default {
  name: "Login",
  components: {
    FormLogin
  }
}
</script>

