<template>
  <v-card class="mb-4">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Group</th>
            <th class="text-left">Name</th>
            <th class="text-left">Project Name</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in groups"
            :key="item.name"
            @click="clickGroup(item.id)"
          >
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.projectName }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      groups: [
        {
          id: 1,
          name: 'Pikachu Lnwza',
          projectName: 'Pikachu Lnwza',
        },
        {
          id: 2,
          name: 'Cs LhorThae',
          projectName: 'Cs LhorThae',
        },
        {
          id: 3,
          name: 'Minnie Mahapuy',
          projectName:
            'Minnie MahapuyMinnie MahapuyMinnie MahapuyMinnie Mahapuy',
        },
        {
          id: 4,
          name: 'Gasha inmylife',
          projectName: 'Gasha inmylife',
        },
        {
          id: 5,
          name: 'SiaO Huadoor',
          projectName: '1',
        },
        {
          id: 6,
          name: 'LabKoi AroiHoH',
          projectName: '1',
        },
        {
          id: 7,
          name: 'DinoSian',
          projectName: '1',
        },
        {
          id: 8,
          name: 'SeedSad Roleplay',
          projectName: '1',
        },
        {
          id: 9,
          name: 'Kitty Heebae',
          projectName: '1',
        },
        {
          id: 10,
          name: 'HumAumarit',
          projectName: '1',
        },
      ],
    }
  },
  methods: {
    clickGroup(id) {
      this.$router.push(`/group/${id}`)
    },
  },
}
</script>

<style lang="scss" scoped></style>
