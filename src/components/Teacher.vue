<template>
  <v-main>
    <v-container fluid>
      <v-row justify="center" style="height: 500px;">
        <v-col cols=4 align-self="center">
          <v-card>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
            </v-img>
          </v-card>
        </v-col>
        <v-col cols=4>
          <v-window
            v-model="window"
            class="elevation-1"
            :show-arrows="showArrows"
          >
            <v-window-item
              v-for="n in 3"
              :key="n"
            >
              <v-card flat>
                <v-card-text>
                  <v-row class="mb-4" align="center">
                    <v-avatar color="grey" class="mr-4"></v-avatar>
                    <strong class="title">Title {{ n }}</strong>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>mdi-account</v-icon>
                    </v-btn>
                  </v-row>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'Teacher',
  data () {
    return {
      msg: '消息',
      window: 0,
      showArrows: true
    }
  },
  methods: {
  }
}
</script>
