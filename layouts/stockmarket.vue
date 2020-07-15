<template>
  <div>
    <app-header></app-header>
    <nuxt />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import Header from '~/components/layouts/Header.vue'
export default {
  middleware: ['authentication-check', 'authenticated'],
  computed: {
    ...mapGetters({
      user: 'authentication/getUser'
    })
  },
  components: {
    appHeader: Header
  },
  methods: {
    ...mapActions({
      setUser: 'authentication/setUser'
    })
  }
}
</script>

<style lang="scss">
@import '../assets/scss/styles.scss';
</style>
