<template>
  <!-- <div v-if="error || !data">
    <h1>asdas</h1>
  </div> -->
  <div>
    <!-- <h1>Good {{ pending }}</h1> -->
    <nuxt-link to="/about">nuxt link</nuxt-link>
    <nuxt-link to="/home">Home</nuxt-link>
    <p>{{ $good("good") }}</p>
    <h1>asdasdasdsa</h1>
    <h1>asdasdasdsa</h1>
    <h1>asdasdasdsa</h1>
    <!-- <p>{{ data.posts.data[0].id }}</p> -->
    <p>Posts {{ posts.posts }}</p>
    <p>Faqs {{ faqs }}</p>
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
const { data } = await useAsyncData("posts", () =>
  $fetch("https://api.safarpark.uz/api/posts")
);
const [{ data: posts }, { data: faqs }] = await Promise.all([
  useFetch<any>(`https://api.safarpark.uz/api/posts`),
  useFetch<any>(`https://api.safarpark.uz/api/faqs`),
]);
const { pending, data: post, error } = useFetch<any>(url);
console.log(data);
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
