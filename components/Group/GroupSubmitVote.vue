<template>
  <v-card class="submit-vote pa-4 pb-8">
    <GroupTableVoterInfo />
    <v-btn block color="var(--color)" class="button-vote">
      ให้คะแนนกลุ่มที่ {{ group.id }}
    </v-btn>
  </v-card>
</template>

<script>
export default {
  props: {
    group: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.submit-vote {
  position: fixed;
  left: 0;
  bottom: -16px;
  width: 100%;
}

.button-vote {
  color: var(--text-color);
}
</style>
