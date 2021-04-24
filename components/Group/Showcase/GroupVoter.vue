<template>
  <div v-if="!loading" class="flex-grow-1 pb-4 d-flex align-stretch">
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
    voteList: new Array(10).fill(0).map((v, i) => ({
      id: i,
      time: new Date().toISOString(),
      by: 'หมีหอย',
    })),
  }),
}
</script>

<style></style>
