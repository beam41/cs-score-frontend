<template>
  <div v-if="!loading" class="voter flex-grow-1 pb-4">
    <GroupVoterList :items="voteList" />
  </div>
</template>

<script>
export default {
  props: {
    group: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    loading: false,
    voteList: new Array(15).fill(0).map((v, i) => ({
      id: i,
      time: new Date().toISOString(),
      by: 'หมีหอย',
    })),
  }),
}
</script>

<style lang="scss" scoped>
.voter {
  overflow: hidden;
}
</style>
