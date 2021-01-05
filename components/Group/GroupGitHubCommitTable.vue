<template>
  <v-card class="card-margin">
    <v-card-title> Last 10 Commit </v-card-title>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Commit</th>
            <th class="text-left">Message</th>
            <th class="text-left">Changes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.name">
            <td>{{ item.abbreviatedOid }}</td>
            <td>{{ item.message }}</td>
            <td>
              <span class="green--text"> +{{ item.additions }} </span>
              <span class="red--text"> -{{ item.deletions }} </span>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.card-margin {
  margin-bottom: 84px;
}
</style>
