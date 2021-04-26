<template>
  <v-card class="vote-card">
    <v-card-title> Latest Vote </v-card-title>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Time</th>
            <th class="text-left">Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ dayjs(item.time).format('HH:mm') }}</td>
            <td>{{ item.by }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
import dayjs from 'dayjs'
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    dayjs,
  },
}
</script>

<style lang="scss" scoped>
.vote-card {
  overflow: hidden;
  height: 100%;
}
</style>
