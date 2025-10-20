export default defineEventHandler(async (event) => {
  return createError({
    statusCode: 404,
    statusMessage: "Not Found",
  });
});
