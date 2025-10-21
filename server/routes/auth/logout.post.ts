export default defineEventHandler(async (event) => {
  deleteCookie(event, "__user");

  return {
    user: null,
  };
});
