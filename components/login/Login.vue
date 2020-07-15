<template>
    <div class="login-buttons">
        <div class="login-buttons__google" id="googleLogin" @click="loginGoogle">
            <div class="login-buttons__google-wrapper">
                <img class="login-buttons__google-icon" src="@/assets/images/google_logo.svg">
            </div>
            <p class="login-buttons__btn-text"><b>Sign in with Google</b></p>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions({
      appLogin: 'authentication/logIn'
    }),
    loginGoogle () {
      this.appLogin()
    }
  }
}
</script>
