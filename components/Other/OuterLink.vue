<template>
  <a
    :href="href"
    rel="noopener noreferrer"
    :class="dark ? 'blue--text text--lighten-3' : ''"
    ><slot
  /></a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    dark: Boolean,
  },
}
</script>
