<template>
  <div :class="['title-wrapper pb-2', big ? 'pt-16' : 'pt-8']">
    <h1 :class="['app-title', big ? 'big text-h1' : 'not-big text-h4']">
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    big: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.app-title {
  &.big {
    line-height: 1.5;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }

  &.not-big {
    word-break: break-word;
  }
}
</style>
