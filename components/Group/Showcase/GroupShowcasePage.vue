<template>
  <div class="showcase px-4 d-flex flex-column">
    <div class="d-flex justify-space-between">
      <div class="top-left">
        <AppHeader :title="group.projectName" big />
      </div>
      <div class="top-right pl-4">
        <GroupShowcaseQr />
      </div>
    </div>
    <GroupInfo :group="group" :dark="dark" />

    <GroupVoter :group="group" />
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
}
</script>

<style lang="scss" scoped>
.showcase {
  background: var(--color);
  color: var(--text-color);
  height: 100vh;
}

.top-left {
  min-width: 0;
}
</style>
