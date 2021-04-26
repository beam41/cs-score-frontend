<template>
  <div class="title-wrapper d-flex align-center">
    <h1 class="title text-h1">
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: 'CS Score',
  }),
}
</script>

<style lang="scss" scoped>
.title-wrapper {
  height: 40vh;
}
</style>
