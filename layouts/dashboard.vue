<template>
  <v-app light>
    <v-navigation-drawer
      :width="300"
      dark
      expand-on-hover
      permanent
      app
      :mini-variant.sync="collapsing"
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title overflow-fix">
              {{ collapsing ? initialName : fullName }}
            </v-list-item-title>
            <v-list-item-subtitle class="caption overflow-fix">
              {{ collapsing ? shortId : user.id }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense dark>
        <template v-for="(item, i) in items">
          <template>
            <v-list-item :key="i" :to="item.to" router exact>
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
          </template>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    collapsing: true,
    items: [
      {
        icon: 'mdi-home-variant',
        title: 'Home',
        to: '/dashboard',
      },
    ],
  }),
  computed: {
    ...mapState({
      user: (state) => state.user.data,
    }),
    initialName() {
      return this.user.firstName[0]
    },
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`
    },
    shortId() {
      const alpha = isNaN(+this.user.id[0])
      const reg = new RegExp(`.{${alpha ? 2 : 3}}$`)
      return alpha
        ? this.user.id[0] + this.user.id.match(reg)[0]
        : this.user.id.match(reg)[0]
    },
  },
}
</script>

<style lang="scss" scoped>
.overflow-fix {
  text-overflow: clip !important;
}
</style>
