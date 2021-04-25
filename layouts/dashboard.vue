<template>
  <v-app light>
    <v-navigation-drawer :width="300" light fixed app mobile-breakpoint="1000">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title overflow-fix">
              {{ fullName }}
            </v-list-item-title>
            <v-list-item-subtitle class="caption overflow-fix">
              {{ user.id }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense light>
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
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`
    },
  },
}
</script>

<style lang="scss" scoped>
.overflow-fix {
  text-overflow: clip !important;
}
</style>
