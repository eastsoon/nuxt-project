export default defineNuxtRouteMiddleware(() => {
  const isAuthenticated = useAuthenticated();
  const isAdmin = useAdmin();
  if (!isAuthenticated.value) {
    return navigateTo("/login");
  }
  if (!isAdmin.value) {
    return navigateTo("/");
  }
});
