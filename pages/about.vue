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
    <div class="q-gutter-y-sm q-mt-md">
      <div class="text-subtitle text-weight-bold">useCounterStore()</div>
      <div>
        <div>count : {{ count }}</div>
        <div>doubleCount : {{ doubleCount }}</div>
        <div>
          <q-btn label="증가" color="primary" @click="counterStore.increment" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useCounterStore } from "~/stores/counter";

// const count = useState<number>("count", () => 1);

const counterStore = useCounterStore();
const { count, doubleCount } = storeToRefs(counterStore);
</script>
