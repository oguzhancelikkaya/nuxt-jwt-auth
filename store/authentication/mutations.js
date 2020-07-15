export default {
  setUser (state, payload) {
    state.user = payload
  },
  setToken (state, idToken) {
    state.token = idToken
  }
}
