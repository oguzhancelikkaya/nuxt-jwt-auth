export default function (context) {
  context.store.dispatch('authentication/initAuth', context)
}
