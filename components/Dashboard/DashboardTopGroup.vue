<template>
  <v-card class="db-card d-flex flex-column">
    <v-card-title>Most Voted Group</v-card-title>
    <v-card-text class="first-cover flex-grow-1">
      <v-card outlined height="100%">
        <v-row class="group-row">
          <v-col
            v-for="group in sortedGroup"
            :key="group.id"
            cols="6"
            sm="4"
            md="4"
            lg="3"
            xl="2"
            class="group-col"
          >
            <v-card
              elevation="1"
              height="100%"
              class="group-card d-flex flex-column"
              :style="{ '--top-group-list-color': groupColor(group.color) }"
            >
              <v-card-subtitle class="top-g-name">
                group <b>{{ group.id }}</b>
              </v-card-subtitle>
              <v-card-text
                class="flex-grow-1 group-card-text d-flex flex-column"
              >
                <div
                  class="top-text flex-grow-1 d-flex flex-column justify-center align-center"
                >
                  <span class="text-h3 text--primary">{{ group.vote }}</span>
                  <span class="text-overline">{{
                    group.vote !== 1 ? 'votes' : 'vote'
                  }}</span>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    group: [
      {
        id: 1,
        vote: 12,
        color: { r: 255, g: 20, b: 10, a: 1 },
      },
      {
        id: 2,
        vote: 200,
        color: { r: 22, g: 20, b: 128, a: 1 },
      },
      {
        id: 3,
        vote: 201,
        color: { r: 105, g: 240, b: 244, a: 1 },
      },
      {
        id: 4,
        vote: 2,
        color: { r: 22, g: 20, b: 128, a: 1 },
      },
      {
        id: 5,
        vote: 15,
        color: { r: 22, g: 20, b: 128, a: 1 },
      },
      {
        id: 6,
        vote: 14,
        color: { r: 22, g: 20, b: 128, a: 1 },
      },
      {
        id: 7,
        vote: 12,
        color: { r: 22, g: 20, b: 128, a: 1 },
      },
      {
        id: 8,
        vote: 1,
        color: { r: 22, g: 20, b: 128, a: 1 },
      },
    ],
  }),
  computed: {
    sortedGroup() {
      return [...this.group].sort((a, b) => b.vote - a.vote)
    },
  },
  methods: {
    groupColor(color) {
      return `rgba(${color.r},${color.g},${color.b},${color.a})`
    },
  },
}
</script>

<style lang="scss" scoped>
.group-card {
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    right: 0;
    width: 15px;
    height: 15px;
    background: #dfdfdf;
    border-radius: 0 0 0 4px;
  }

  &::after {
    content: '';
    position: absolute;
    right: -15px;
    width: 15px * 2;
    height: 15px;
    background: var(--top-group-list-color);
    transform-origin: bottom left;
    transform: translate(1px, -15px) rotate(45deg);
  }
}
.first-cover {
  overflow: hidden;
}

.group-row {
  margin: 0;
  height: 100%;
  overflow-y: scroll;
}

.group-col {
  height: 50%;
  min-height: 180px;
}
</style>
