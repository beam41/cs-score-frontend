<template>
  <v-form v-model="valid" @submit.prevent="login">
    <v-card-title>Login</v-card-title>
    <div class="mx-4">
      <v-text-field
        v-model="id"
        type="text"
        label="รหัส"
        autocomplete="username"
        required
        outlined
        dense
        :disabled="loading"
      />
      <v-text-field
        v-model="password"
        type="password"
        label="Password"
        autocomplete="current-password"
        required
        outlined
        dense
        :disabled="loading"
      />
    </div>
    <v-card-actions>
      <v-btn
        text
        color="primary"
        class="mr-4"
        :loading="loading"
        :disabled="!valid"
        type="submit"
      >
        Login
      </v-btn>
    </v-card-actions>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    id: '',
    password: '',
  }),
}
</script>

<style></style>
