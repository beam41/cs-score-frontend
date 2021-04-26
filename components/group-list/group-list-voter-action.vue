<template>
  <div class="vote-action">
    <v-btn
      v-if="user.group"
      block
      color="primary"
      class="mt-2"
      @click="editPage()"
    >
      แก้ไขข้อมูลกลุ่ม
    </v-btn>
    <v-btn
      v-if="user.type.hasDashboardAccess"
      block
      color="secondary"
      class="mt-2"
      to="/dashboard"
    >
      Dashboard
    </v-btn>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      user: (state) => state.user.data,
    }),
  },
  methods: {
    editPage() {
      this.$router.push('/group/edit')
    },
  },
}
</script>
