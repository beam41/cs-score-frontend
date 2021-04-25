<template>
  <v-card class="db-card d-flex flex-column">
    <v-card-title>Log</v-card-title>
    <v-card-text class="flex-grow-1 log-cover">
      <div class="log-box">
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr
                v-for="item in rawLog"
                :key="item.id"
                :class="['group-list-item', 'log-row', item.type]"
              >
                <td
                  class="log-time text-caption font-weight-bold text--secondary"
                >
                  {{ dayjs(item.time).format('HH:mm') }}
                </td>
                <td class="log-ico">
                  <v-icon :color="colorMap[item.type] + ' accent-4'">
                    {{ iconMap[item.type] }}
                  </v-icon>
                </td>
                {{/* eslint-disable-next-line vue/no-v-html */}}
                <td class="message"><span v-html="item.message"></span></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import dayjs from 'dayjs'
export default {
  data: () => ({
    rawLog: [
      {
        id: 1,
        time: new Date().toISOString(),
        type: 'vote',
        message: `<b>meehoi (id: 600510569)</b> gives vote to group <b>Pikachu Lnwza (id: 1)</b>.`,
      },
      {
        id: 2,
        time: new Date().toISOString(),
        type: 'serverError',
        message: `error <b>500</b> at the server. check server log for more.`,
      },
      {
        id: 3,
        time: new Date().toISOString(),
        type: 'general',
        message: `group <b>Pikachu Lnwza (id: 1)</b> change their name to <b>Pikachu Pikuchu (id: 1)</b>.`,
      },
      {
        id: 4,
        time: new Date().toISOString(),
        type: 'general',
        message: `group <b>Pikachu Lnwza (id: 1)</b> change their color from <i style="--log-color-block: rgba(224, 38, 25, 1)">rgba(224, 38, 25, 1)</i> to <i style="--log-color-block: rgba(21, 20, 19, 1)">rgba(21, 20, 19, 1)</i>.`,
      },
      {
        id: 5,
        time: new Date().toISOString(),
        type: 'notice',
        message: `<b>meehoi (id: 600510569)</b> moved from group <b>Pikachu Lnwza (id: 1)</b> to <b>Cs LhorThae (id: 2)</b>.`,
      },
    ],
  }),
  computed: {
    iconMap() {
      return {
        vote: 'mdi-vote',
        serverError: 'mdi-alert-octagon',
        general: 'mdi-chat-alert',
        notice: 'mdi-alert',
      }
    },
    colorMap() {
      return {
        vote: '',
        serverError: 'error',
        general: 'info',
        notice: 'warning',
      }
    },
  },
  methods: {
    dayjs,
  },
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';

.log-time {
  width: 1px;
}

.log-ico {
  width: 1px;
}

.log-cover {
  padding: 0;
  overflow-y: scroll;
}

.message ::v-deep {
  i {
    font-style: normal;
    &::after {
      display: inline-block;
      content: '';
      background: var(--log-color-block);
      margin-left: 1px;
      width: 0.7em;
      height: 0.7em;
      border-radius: 2px;
    }
  }
}

.log-row {
  &.vote {
  }

  &.serverError {
    background: #ffebee;
  }

  &.general {
    background: #e0f2f1;
  }

  &.notice {
    background: #fff8e1;
  }
}
</style>
