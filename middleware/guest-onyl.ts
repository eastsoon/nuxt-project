export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useAuthUser();
  if (isAuthenticated.value) {
    const { server } = useRuntimeConfig();
    if (server) return navigateTo("/");
    return abortNavigation("/");
  }
});
