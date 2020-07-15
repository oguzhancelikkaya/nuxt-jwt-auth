import * as firebase from 'firebase/app'
import Cookie from 'js-cookie'
import 'firebase/auth'

export default {
  setUser ({ commit }, payload) {
    commit('setUser', payload.email)
  },
  logIn ({ commit }) {
    const vm = this
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        commit('setUser', result.user.email)
        commit('setToken', result.credential.idToken)
        Cookie.set('appUser', result.user.email)
        Cookie.set('appToken', result.credential.idToken)
        if (process.browser) {
          localStorage.setItem('appUser', result.user.email)
          localStorage.setItem('appToken', result.credential.idToken)
        }
        vm.$router.push('/stockmarket')
      }).catch(console.log)
  },
  logOut ({ commit }) {
    firebase.auth().signOut().then(() => {
      commit('setUser', null)
      commit('setToken', null)
      Cookie.set('appUser', '')
      Cookie.set('appToken', '')
      localStorage.setItem('appUser', '')
      localStorage.setItem('appToken', '')
    })
  },
  initAuth (vuexContext, context) {
    let appToken
    let appUser
    if (context.req) {
      if (!context.req.headers.cookie) {
        return
      }
      appToken = context.req.headers.cookie.split(';').find(c => c.trim().startsWith('appToken=')).split('=')[1]
      appUser = context.req.headers.cookie.split(';').find(c => c.trim().startsWith('appToken=')).split('=')[1]
    } else if (process.browser) {
      appToken = localStorage.getItem('appToken')
      appUser = localStorage.getItem('appUser')
    }
    vuexContext.commit('setToken', appToken)
    vuexContext.commit('setUser', appUser)
  }
}
