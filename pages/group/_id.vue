<template>
  <div class="d-flex flex-column main px-4">
    <AppHeader :title="group.projectName" />
    <GroupInfo :group="group" />
    <GroupGitHubCommit :group="group" />
    <GroupSubmitVote :group="group" />
  </div>
</template>

<script>
export default {
  data: () => ({
    group: {
      id: 1,
      name: 'Pikachu Lnwza',
      projectName: 'เทพซ่า007',
      githubName: 'beam41',
      githubRepo: 'beam41.github.io',
    },
  }),
}
</script>

<style></style>
