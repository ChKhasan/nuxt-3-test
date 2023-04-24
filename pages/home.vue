<script lang="ts">
import { defineComponent, onMounted } from "vue";

interface posts1 {
  post?: object;
  subtitle: object;
  desc: object;
  instagramm: string | null;
  telegram: string | null;
}
export default defineComponent({
  setup() {
    const count = ref<number>(0);
    const postsData = ref({
      post: {},
    });
    const name = ref<number>(0);
    const text = ref<string>("");
    const id = ref(23);

    const { $axios, $good } = useNuxtApp();
    const countUp = () => {
      count.value++;
    };
    const url = computed(() => {
      return `https://api.safarpark.uz/api/posts/${id.value}`;
    });
    const { pending, data, error } = useFetch<any>(url);
    onMounted(async () => {
      const post = await $axios.get(`https://api.safarpark.uz/api/posts/${id.value}`);
      console.log("good", post);
    });
    watch(name, (newVal, lastVal) => {});
    return { count, countUp, postsData, pending, data, id, error, text };
  },
});
</script>
<template>
  <div v-if="error || !data">
    <h1>Good error</h1>
  </div>
  <div v-else>
    <h1>{{ pending }}</h1>
    <h1>{{ error }}</h1>
    <h4>{{ data.post }}</h4>
    <input type="text" v-model="text" />
    <a-button type="primary" @click="countUp">Count {{ $good(text) }}</a-button>
    <nuxt-link to="/">Home</nuxt-link>
  </div>
</template>

<style scoped></style>
