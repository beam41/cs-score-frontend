<template>
  <div v-if="!loading">
    <GroupVoterList :items="voteList" :dark="dark" :height="height" />
  </div>
</template>

<script>
export default {
  props: {
    group: {
      type: Object,
      required: true,
    },
    dark: Boolean,
    height: {
      type: String,
      default: undefined,
    },
  },
  data: () => ({
    loading: false,
    voteList: [
      {
        id: 1,
        time: new Date().toISOString(),
        by: 'หมีหอย',
      },
      {
        id: 12,
        time: new Date().toISOString(),
        by: 'ไม่ใช่หมีหอย',
      },
      {
        id: 13,
        time: new Date().toISOString(),
        by: 'ไม่ใช่หมีหอย',
      },
      {
        id: 178,
        time: new Date().toISOString(),
        by: 'ไม่ใช่หมีหอย',
      },
      {
        id: 1454,
        time: new Date().toISOString(),
        by: 'ไม่ใช่หมีหอย',
      },
      {
        id: 154545,
        time: new Date().toISOString(),
        by: 'ไม่ใช่หมีหอย',
      },
      {
        id: 11542,
        time: new Date().toISOString(),
        by: 'ไม่ใช่หมีหอย',
      },
      {
        id: 145,
        time: new Date().toISOString(),
        by: 'ไม่ใช่หมีหอย',
      },
      {
        id: 14587,
        time: new Date().toISOString(),
        by: 'ไม่ใช่หมีหอย',
      },
      {
        id: 1778,
        time: new Date().toISOString(),
        by: 'ไม่ใช่หมีหอย',
      },
    ],
  }),
}
</script>

<style></style>
