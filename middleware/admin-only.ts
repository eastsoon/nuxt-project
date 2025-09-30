export default defineNuxtRouteMiddleware(() => {
  const { isAuthenticated, isAdmin } = useAuthUser();
  if (!isAuthenticated.value) {
    return navigateTo("/login");
  }
  if (!isAdmin.value) {
    return navigateTo("/");
  }
});
