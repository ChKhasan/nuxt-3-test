<template>
  <!-- <div v-if="error || !data">
    <h1>asdas</h1>
  </div> -->
  <div>
    <!-- <h1>Good {{ pending }}</h1> -->
    <nuxt-link to="/about">nuxt link</nuxt-link>
    <nuxt-link to="/home">Home</nuxt-link>
    <p>{{ $good("good") }}</p>
    <!-- <p>{{ data.posts.data[0].id }}</p> -->
    <p>Posts {{ posts.posts }}</p>
    <p>Faqs {{ faqs }}</p>
  </div>
</template>

<script setup lang="ts">
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
