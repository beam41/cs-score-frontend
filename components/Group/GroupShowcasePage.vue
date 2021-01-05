<template>
  <div class="showcase-bg px-4">
    <div class="d-flex justify-space-between">
      <div class="top-left">
        <AppHeader :title="group.projectName" big />
      </div>
      <div class="top-right pl-4">
        <GroupShowcaseQr />
      </div>
    </div>
    <GroupInfo :group="group" :dark="dark" />

    <GroupVoter :group="group" :dark="dark" height="calc(100vh - 420px)" />
  </div>
</template>

<script>
export default {
  props: {
    group: {
      type: Object,
      required: true,
    },
    dark: Boolean,
  },
  mounted() {
    const html = document.getElementsByTagName('html')[0]
    html.style.overflowY = 'auto'
  },
  destroyed() {
    const html = document.getElementsByTagName('html')[0]
    html.style.overflowY = null
  },
}
</script>

<style lang="scss" scoped>
.showcase-bg {
  background: var(--color);
  color: var(--text-color);
  min-height: 100vh;
}

.top-left {
  min-width: 0;
}
</style>
