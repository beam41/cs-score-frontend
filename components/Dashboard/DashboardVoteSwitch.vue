<template>
  <v-card class="db-card d-flex flex-column">
    <v-card-title>Vote Control</v-card-title>
    <v-card-text
      class="flex-grow-1 d-flex flex-column align-center justify-center"
    >
      <div class="text-h4 text--primary mb-4">{{ currentTime }}</div>
      <v-btn
        :color="`${voting ? 'error' : 'success'} ${voting ? '' : 'darken-1'}`"
        large
        @click="voting ? stop() : start()"
      >
        {{ voting ? 'หยุดโหวต' : 'เริ่มโหวต' }}
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import dayjs from 'dayjs'
export default {
  data: () => ({
    currentTime: '00:00:00',
    voting: false,
  }),
  mounted() {
    setInterval(() => {
      this.setTime()
    }, 100)
  },
  methods: {
    setTime() {
      this.currentTime = dayjs().format('HH:mm:ss')
    },
    start() {
      this.voting = true
    },
    stop() {
      this.voting = false
    },
  },
}
</script>

<style scoped></style>
