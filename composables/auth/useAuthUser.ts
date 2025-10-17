import type { UserWithoutPassword } from "~/types/user";

// 임시방편으로 로그인 계정 전역상태 관리
// const authUser = ref<Maybe<UserWithoutPassword>>(null);

export const useAuthUser = () =>
  useState<Maybe<UserWithoutPassword>>("user", () => null);

// export const useAuthUser = () => {
//   const isAuthenticated = computed(() => authUser.value !== null);
//   const isAdmin = computed(() => !!authUser.value?.roles.includes("ADMIN"));
//   return {
//     authUser,
//     isAuthenticated,
//     isAdmin,
//   };
// };
