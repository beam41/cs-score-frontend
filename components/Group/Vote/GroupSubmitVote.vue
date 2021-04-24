<template>
  <v-card class="submit-vote">
    <div class="inner-cover pa-4 pb-8">
      <GroupListVoterInfo no-btn />
      <v-btn block color="var(--color)" class="button-vote mb-4" large>
        ให้คะแนนกลุ่มที่ {{ group.id }}
      </v-btn>
      <v-btn block depressed @click="back()"> กลับ </v-btn>
    </div>
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
  methods: {
    back() {
      this.$router.push('/group/list')
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

.inner-cover {
  margin: auto;
  max-width: 700px;
}

.button-vote {
  color: var(--text-color);
}
</style>
