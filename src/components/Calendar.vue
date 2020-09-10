<template>
  <v-main>
    <v-container>
      <v-sheet
        tile
        height="54"
        color="grey lighten-3"
        class="d-flex"
      >
        <v-btn
          icon
          class="ma-2"
          @click="$refs.calendar.prev()"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-select
          v-model="type"
          :items="types"
          dense
          outlined
          hide-details
          class="ma-2"
          label="type"
        ></v-select>
        <v-select
          v-model="mode"
          :items="modes"
          dense
          outlined
          hide-details
          label="event-overlap-mode"
          class="ma-2"
        ></v-select>
        <v-select
          v-model="weekday"
          :items="weekdays"
          dense
          outlined
          hide-details
          label="weekdays"
          class="ma-2"
        ></v-select>
        <v-spacer></v-spacer>
        <v-btn
          icon
          class="ma-2"
          @click="$refs.calendar.next()"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="value"
          :weekdays="weekday"
          :type="type"
          :events="events"
          :event-overlap-mode="mode"
          :event-overlap-threshold="30"
          :event-color="getEventColor"
          @change="getEvents"
        ></v-calendar>
      </v-sheet>

    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'Calendar',
  data () {
    return {
      type: 'month',
      types: ['month', 'week', 'day', '4day'],
      mode: 'stack',
      modes: ['stack', 'column'],
      weekday: [0, 1, 2, 3, 4, 5, 6],
      weekdays: [
        { text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
        { text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
        { text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
        { text: 'Mon, Wed, Fri', value: [1, 3, 5] }
      ],
      value: '',
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party']
    }
  },
  mounted () {
    // this.$http
    //   .get('/lab/calendar')
    //   .then((response) => {
    //     console.log(response.data)
    //     if (response.status === 200) {
    //       this.msg = response.data
    //     }
    //   })
  },
  methods: {
    getEvents ({ start, end }) {
      const events = []
      console.log(start, start.data)
      const min = new Date(`${start.date}T00:00:00`)
      const max = new Date(`${end.date}T23:59:59`)
      console.log(min.getTime())
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = this.rnd(days, days + 1)

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0
        const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        const second = new Date(first.getTime() + secondTimestamp)

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay
        })
      }

      this.events = events
    },
    getEventColor (event) {
      return event.color
    },
    rnd (a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    }
  }
}

/*
Message

id      end-date title message own_id
起始时间               user_id确保唯一性

查询可以直接用between，可以全部读取，在前端做过滤处理。
因此，除了返回消息还需要返回当前用户id和管理员id。

1. 所有人：全部显示
2. 自己：判断返回id 与 消息own_id 一致
3. 自己和管理员： 对于2加一条判断语句

表单
1. 提交事件
2. 选择可见性（管理员/所有人/自己）
3. 只返回是否提交成功，前端直接无刷新 添加效果
*/
</script>
