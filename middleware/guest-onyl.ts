export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = storeToRefs(useAuthStore());
  if (isAuthenticated.value) {
    const { server } = useRuntimeConfig();
    if (server) return navigateTo("/");
    return abortNavigation("/");
  }
});
