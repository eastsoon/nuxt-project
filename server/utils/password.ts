export const verifyPassword = (
  userPassword: string,
  hashedPassword: string
) => {
  return userPassword === hashedPassword;
};
