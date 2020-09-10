<template>
  <v-main>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-card class="elevation-12">
            <v-toolbar
              color="primary"
              dark
              flat
            >
              <v-toolbar-title>登录</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn
                    href="/"
                    icon
                    large
                    v-on="on"
                  >
                    <v-icon>mdi-home</v-icon>
                  </v-btn>
                </template>
                <span>主页</span>
              </v-tooltip>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Username"
                  prepend-icon="mdi-account"
                  type="text"
                  v-model=username
                ></v-text-field>

                <v-text-field
                  label="Password"
                  prepend-icon="mdi-lock"
                  type="password"
                  v-model=password
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" v-on:click="login">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '金鹏',
      password: '123456'
    }
  },
  methods: {
    login: function (event) {
      // event.preventDefault()
      console.log(this.username + '-' + this.password)

      let formData = new FormData()
      formData.append('username', this.username)
      formData.append('password', this.password)
      let config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      this.$http
        .post('/user/login', formData, config)
        .then((response) => {
          if (response.status === 200) {
            let token = response.headers.authorization
            localStorage.setItem('token', token)
            this.$router.push({ path: '/' })
          } else {
            console.log('info wrong')
          }
        })
    }
  }
}
</script>

<style>

</style>
