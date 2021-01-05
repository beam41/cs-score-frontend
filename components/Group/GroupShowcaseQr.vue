<template>
  <v-card class="mt-16 pa-4">
    <qrcode-vue :value="currentLocation" :size="128" class="qr" />
  </v-card>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
export default {
  components: {
    QrcodeVue,
  },
  computed: {
    currentLocation() {
      return window.location.href
    },
  },
}
</script>

<style lang="scss" scoped>
.qr {
  height: 128px;
}
</style>
