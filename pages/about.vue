<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <PageTitle title="About" />
      <PageDescription
        description="Vue & Nuxt Mastery Class 웹은 Nuxt3로 만들어졌습니다."
      />
    </div>
    <div class="q-gutter-y-sm q-mt-md">
      <div class="text-subtitle text-weight-bold">useState('count')</div>
      <div>
        count: {{ count }}
        <q-btn label="증가" color="primary" @click="count++" />
        <q-btn label="감소" color="primary" @click="count--" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const count = useState<number>("count", () => 1);
</script>
