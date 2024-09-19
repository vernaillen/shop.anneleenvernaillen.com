export default defineNuxtRouteMiddleware((to, from) => {
  const viewer = useState<Viewer | null>('viewer')
  if (!to.path.startsWith('/my-account') && !viewer.value) {
    return navigateTo('/my-account')
  }
})