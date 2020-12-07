<template>
  <v-simple-table fixed-header height="600px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Group</th>
          <th class="text-left">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.group }}</td>
          <td>{{ item.name }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          group: 1,
          name: 'Pikachu Lnwza',
        },
        {
          group: 2,
          name: 'Cs LhorThae',
        },
        {
          group: 3,
          name: 'Minnie Mahapuy',
        },
        {
          group: 4,
          name: 'Gasha inmylife',
        },
        {
          group: 5,
          name: 'SiaO Huadoor',
        },
        {
          group: 6,
          name: 'LabKoi AroiHoH',
        },
        {
          group: 7,
          name: 'DinoSian',
        },
        {
          group: 8,
          name: 'SeedSad Roleplay',
        },
        {
          group: 9,
          name: 'Kitty Heebae',
        },
        {
          group: 10,
          name: 'HumAumarit',
        },
      ],
    }
  },
}
</script>

<style></style>
