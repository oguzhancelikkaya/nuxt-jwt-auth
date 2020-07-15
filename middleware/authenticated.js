export default function (context) {
  if (context.store.getters['authentication/getUser'] === '' || context.store.getters['authentication/getUser'] === null) {
    return context.redirect('/')
  }
}
