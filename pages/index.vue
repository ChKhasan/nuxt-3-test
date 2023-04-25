<template>
  <!-- <div v-if="error || !data">
    <h1>asdas</h1>
  </div> -->
  <div>
    <!-- <h1>Good {{ pending }}</h1> -->
    <nuxt-link to="/about">nuxt link</nuxt-link>
    <nuxt-link to="/home">Home</nuxt-link>
    <p>{{ $good("good") }}</p>
    <pre class="text-left"><code>adsa{{ good }}good</code></pre>
    <h1>hello{{ hello }}</h1>
    <button @click="count++">count</button>
    <!-- <p>{{ data.posts.data[0].id }}</p> -->
    <!-- <p>Posts {{ posts.posts }}</p> -->
    Page visits: {{ good }}
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: "rotate",
  },
});
interface news {
  posts: object;
}
const { lang } = useRoute().query;
const { $axios, $good } = useNuxtApp();
const news = ref<news>({
  posts: {
    name: "asdsad",
  },
});
const url = computed(() => {
  return `https://api.safarpark.uz/api/posts`;
});

const count = ref(1);
const { data: good } = await useFetch(() => `/api/test`);
const { data: hello } = await useFetch(() => `/api/hello`);

const { pending, data: post, error } = useFetch<any>(url);
</script>
<style>
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>
