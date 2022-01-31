<template>
  <v-form @submit.prevent="login">
    <v-text-field
        name="login"
        label="Login"
        type="text"
        v-model="credentials.username"
        required
    ></v-text-field>
    <v-text-field
        id="password"
        name="password"
        label="Password"
        type="password"
        v-model="credentials.password"
        required
    ></v-text-field>
    <v-btn
        color="#0C2659"
        type="submit"
        class="v-btn--block"
        dark>Login
    </v-btn>
  </v-form>
</template>

<script>

export default {
  name: "FormLogin",
  data() {
    return {
      credentials: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.credentials);
    }
  }
}
</script>
