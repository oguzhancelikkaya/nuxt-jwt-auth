<template>
  <div v-if="appToken !== ''">
      <button class="btn btn-primary" @click="appLogout">Logout</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  layout: 'stockmarket',
  methods: {
    ...mapActions({
      logout: 'authentication/logOut'
    }),
    appLogout () {
      this.logout().then()
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters({
      appToken: 'authentication/getUser'
    })
  },
  created () {
    if (this.$store.getters['authentication/getUser'] === '' || this.$store.getters['authentication/getUser'] === null) {
      this.$router.push('/')
    }
  }
}
</script>
