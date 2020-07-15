<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  middleware: ['authentication-check'],
  computed: {
    ...mapGetters({
      user: 'authentication/getUser'
    })
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
