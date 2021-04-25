<template>
  <v-row class="px-6 py-3">
    <v-col cols="12" md="4" lg="3" class="dashboard-col">
      <DashboardVoteSwitch />
    </v-col>
    <v-col cols="12" md="8" lg="9" class="dashboard-col">
      <DashboardTopGroup />
    </v-col>
    <v-col cols="12" class="dashboard-col">
      <DashboardLog />
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'dashboard',
}
</script>

<style lang="scss" scoped>
.dashboard-col {
  height: calc(50vh - #{12 * 1px});
}

::v-deep .db-card {
  height: 100%;
}
</style>
