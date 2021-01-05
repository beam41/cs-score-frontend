<template>
  <div :class="['d-flex flex-column main', isInGroup ? '' : 'px-4 pad-submit']">
    <template v-if="!isInGroup">
      <AppHeader :title="group.projectName" />
      <GroupInfo :group="group" />
      <GroupSubmitVote :group="group" />
    </template>
    <template v-else>
      <LazyGroupShowcasePage :group="group" :dark="shouldDark" />
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { determineColor } from '@/util/determine-color'
export default {
  data: (vm) => ({
    group: {
      id: +vm.$route.params.id,
      name: 'Pikachu Lnwza',
      projectName:
        'whitewhitewhitewhitewhitewhitewhitewhitewhitewhitewhitewhitewhitewhitewhitewhitewhitewhitewhitewhitewhitewhitewhitewhite',
      githubName: 'beam41',
      githubRepo: 'beam41.github.io',
    },
    shouldDark: false,
  }),
  mounted() {
    this.colorHandle({ r: 0, g: 241, b: 181, a: 1 })
  },
  computed: {
    ...mapState({
      user: (state) => state.user.data,
    }),
    isInGroup() {
      return this.group.id === this.user?.group?.id
    },
  },
  methods: {
    colorHandle(color) {
      this.shouldDark = !determineColor(color)
      document.documentElement.style.setProperty(
        '--color',
        `rgba(${color.r},${color.g},${color.b},${color.a})`
      )
      document.documentElement.style.setProperty(
        '--text-color',
        this.shouldDark ? 'white' : `rgba(0,0,0,0.85)`
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.pad-submit {
  padding-bottom: 128px;
}
</style>
