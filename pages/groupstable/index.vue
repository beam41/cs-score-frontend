<template>
  <div class="d-flex flex-column main px-4">
    <Tablehead />
    <Votername />
    <Table />
  </div>
</template>

<script>
import Votername from '~/components/Table/Votername.vue'
import Tablehead from '~/components/Table/็Tablehead.vue'
export default {
  components: { Tablehead, Votername },
}
</script>

<style></style>
