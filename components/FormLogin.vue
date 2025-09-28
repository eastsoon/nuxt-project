<template>
  <q-form class="q-gutter-lg" @submit.prevent="handleLoginSubmit">
    <q-input v-model="form.email" filled label="email" />

    <q-input v-model="form.passwowrd" filled type="password" label="password" />

    <div v-if="error" class="text-red">{{ error.message }}</div>

    <div class="q-mt-lg">
      <q-btn
        class="full-width"
        label="Login"
        type="submit"
        size="lg"
        color="primary"
        no-caps
        :loading="loading"
      />
    </div>
  </q-form>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  success: [];
}>();
// const emit = defineEmits(['success']);

const { singIn } = useAuth();

const form = ref({
  email: "",
  passwowrd: "",
});
const error = ref<Error | null>(null);
const loading = ref(false);

const handleLoginSubmit = () => {
  try {
    error.value = null;
    loading.value = true;

    singIn(form.value.email, form.value.passwowrd);
    // login business logic

    emit("success");
  } catch (err: unknown) {
    if (err instanceof Error) {
      error.value = err;
    } else {
      throw Error;
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped></style>
