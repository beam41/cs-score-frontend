<template>
  <div>
    <v-form @submit.prevent="login">
      <h2 class="subtitle-1 mb-2 grey--text text--lighten-1">Login</h2>
      <div>
        <v-text-field
          v-model="id"
          type="text"
          label="รหัสประจำตัว"
          autocomplete="username"
          required
          outlined
          dense
          :disabled="loading"
        />
        <v-text-field
          v-model="password"
          type="password"
          label="รหัสผ่าน"
          autocomplete="current-password"
          required
          outlined
          dense
          :disabled="loading"
        />
      </div>
      <v-btn block color="primary" :loading="loading" type="submit">
        Login
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    id: '',
    password: '',
    loading: false,
  }),

  methods: {
    login() {
      this.$store.commit('user/login', {
        firstName: 'Pichai',
        lastName: 'Namwan',
        type: {
          hasDashboardAccess: true,
          pointPerSubmit: 1,
        },
        availableSubmit: 10,
        group: { id: 1 },
      })
      this.$router.push('/group/list')
    },
  },
}
</script>

<style></style>
