<template>
  <div class="mb-4">
    <div class="detail-wrapper d-flex align-center justify-space-between">
      <p class="text-subtitle-1 ma-0">{{ name }}</p>
      <p class="text-subtitle-1 ma-0">
        โหวตได้อีก: {{ user.availableSubmit }} กลุ่ม
      </p>
    </div>
    <GroupListVoterAction />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      user: (state) => state.user.data,
    }),
    name() {
      return `${this.user.firstName} ${this.user.lastName}`
    },
  },
}
</script>
