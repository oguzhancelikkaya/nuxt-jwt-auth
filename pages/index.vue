<template>
  <div class="container" >
    <div class="jumbotron">
      <logo />
      <h1 class="title">
        Stock Market Hunter
      </h1>
      <app-login />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Logo from '~/components/Logo.vue'
import Login from '@/components/login/Login.vue'

export default {
  components: {
    Logo,
    appLogin: Login
  },
  methods: {
    ...mapActions({
      setUser: 'authentication/setUser'
    })
  }
}
</script>

<style lang="scss">
.jumbotron{
  opacity:.8;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: Ubuntu, 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 60px;
  padding-top:15px;
  color: #35495e;
  letter-spacing: 1px;
  transition: opacity .6s ease;
  opacity: 0;
  animation: slide-in .6s ease-out forwards
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.login-buttons{
  transition: opacity .8s ease;
  opacity: 0;
  animation: slide-in .8s ease-out forwards
}
</style>
