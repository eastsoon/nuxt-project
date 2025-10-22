export default defineNuxtPlugin(async (nuxtApp) => {
  const { fetchUser } = useAuthStore();
  await fetchUser();
});
