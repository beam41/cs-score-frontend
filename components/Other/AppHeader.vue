<template>
  <div
    class="title-wrapper d-flex align-center pt-8 pb-2"
    height="calc(100vh-20vh)"
  >
    <h1 class="title text-h4">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
