<template>
  <v-app-bar
    app
    absolute
    color="#6A76AB"
    dark
    shrink-on-scroll
    prominent
    src="https://picsum.photos/1920/1080?random"
    fade-img-on-scroll
    scroll-target="#scrolling-techniques-3"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
      ></v-img>
    </template>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon @click="changeURL(3)">mdi-login</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>

    <template v-slot:extension>
      <v-tabs align-with-title v-on:change="changeURL">
        <v-tab>Tab 1</v-tab>
        <v-tab>Tab 2</v-tab>
        <v-tab>Tab 3</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data () {
    return {
      url: ['/info/teacher', '/info/student', '/lab/calendar', '/login']
    }
  },
  methods: {
    changeURL: function (value) {
      console.log(value)
      this.$router.push({ path: this.url[value] })
    }
  }
}
</script>
