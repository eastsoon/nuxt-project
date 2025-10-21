import { getUser } from "~/server/models/user";

export default defineEventHandler(async (event) => {
  const body = readBody<{ email: string; password: string }>(event);

  const { email, password } = await body;

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: "Email and password are required",
    });
  }

  const userWithPassword = getUser(email);

  if (!userWithPassword) {
    throw createError({
      statusCode: 401,
      statusMessage: "Bad credentials",
    });
  }

  const verified = verifyPassword(password, userWithPassword.password);

  if (!verified) {
    throw createError({
      statusCode: 401,
      statusMessage: "Bad credentials",
    });
  }

  const { password: _password, ...userWithoutPassword } = userWithPassword;

  setCookie(event, "__user", JSON.stringify(userWithoutPassword));

  return {
    user: userWithoutPassword,
  };
});
