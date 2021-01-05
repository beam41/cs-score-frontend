<template>
  <div v-if="!loading">
    <GroupGitHubCommitTable :items="commitList" />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    group: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    commitList: [],
    loading: true,
  }),
  mounted() {
    this.queryRepo()
  },
  methods: {
    queryRepo() {
      const query = `
        query ($name: String!, $owner: String!) {
          repository(name: $name, owner: $owner) {
            defaultBranchRef {
              target {
                ... on Commit {
                  history(first: 10) {
                    edges {
                      node {
                        message
                        abbreviatedOid
                        additions
                        deletions
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `
      const variables = {
        name: this.group.githubRepo,
        owner: this.group.githubName,
      }
      axios({
        url: 'https://api.github.com/graphql',
        method: 'post',
        headers: { Authorization: `bearer ${this.$config.githubKey}` },
        data: {
          query,
          variables,
        },
      }).then((res) => {
        this.loading = false
        if (!res.data.errors) {
          this.commitList = res.data.data.repository.defaultBranchRef.target.history.edges.map(
            ({ node }) => node
          )
        }
      })
    },
  },
}
</script>

<style></style>
