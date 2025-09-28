import type { UserWithoutPassword } from "~/types/user";

export const useAuth = () => {
  const { authUser } = useAuthUser();

  const singIn = (email: string, password: string) => {
    const foundUser = getUser(email, password);

    if (!foundUser) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid email or password",
      });
    }

    setUser(foundUser);
  };

  const setUser = (user: Maybe<UserWithoutPassword>) => {
    authUser.value = user;
  };

  const singOut = () => setUser(null);

  return {
    singIn,
    singOut,
  };
};
