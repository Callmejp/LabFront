<template>
  <div>
    <app-bar></app-bar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'OuterBackground',
  data () {
    return {
      msg: '消息'
    }
  },
  methods: {
  }
}
</script>
