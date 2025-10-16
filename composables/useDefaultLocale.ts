export const useDefaultLocale = (fallback = "en") => {
  const locale = ref<string | undefined>(fallback);

  if (import.meta.client) {
    locale.value = navigator.language.split("-")[0];
  }
  if (import.meta.server) {
    const reqLocale = useRequestHeaders()["accept-language"]?.split(",")[0];
    if (reqLocale) {
      locale.value = reqLocale;
    }
  }

  return locale;
};
