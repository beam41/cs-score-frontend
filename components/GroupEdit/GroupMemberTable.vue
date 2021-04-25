<template>
  <v-card>
    <v-card-subtitle>สมาชิกกลุ่ม</v-card-subtitle>
    <v-simple-table dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">รหัสนักศึกษา</th>
            <th class="text-left">ชื่อ-นามสกุล</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in sortedMembers" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }} {{ item.lastname }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    members: [
      {
        id: '600510455',
        name: 'หมีหอย',
      },
      {
        id: '590510455',
        name: 'หมีหอย',
      },
      {
        id: '600510422',
        name: 'หมีหอย',
      },
      {
        id: '600510488',
        name: 'หมีหอย',
      },
      {
        id: '600510500',
        name: 'หมีหอย',
      },
    ],
  }),
  computed: {
    sortedMembers() {
      return [...this.members].sort((a, b) => a.id.localeCompare(b.id))
    },
  },
}
</script>

<style></style>
