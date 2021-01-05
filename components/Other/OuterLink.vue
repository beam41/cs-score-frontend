<template>
  <a :href="href" rel="noopener noreferrer"><slot /></a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
  },
}
</script>
