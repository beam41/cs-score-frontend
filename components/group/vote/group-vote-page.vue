<template>
  <div class="main px-4 pad-submit">
    <AppHeader :title="group.projectName" />
    <GroupInfo :group="group" />
    <GroupSubmitVote :group="group" />
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
}
</script>

<style></style>
