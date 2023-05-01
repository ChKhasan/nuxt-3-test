<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  setup() {
    const count = ref(0);
    const postsData = ref({
      post: {},
    });
    const slides = ref(
      Array.from({ length: 10 }, () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        // Figure out contrast color for font
        const contrast = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "black" : "white";

        return { bg: `rgb(${r}, ${g}, ${b})`, color: contrast };
      })
    );
    // definePageMeta({
    //   pageTransition: {
    //     name: "page",
    //   },
    //   layout: "custom",
    // });
    const name = ref(0);
    const text = ref("");
    const post = ref({});
    const id = ref(23);
    const router = useRouter();
    // router.replace({ query: { page: 1 } });
    const { $axios, $good } = useNuxtApp();
    const countUp = () => {
      count.value++;
    };
    onMounted(() => {
      // name.value = 12;
      router.push({
        path: "/home",
        query: { streamer: "1" },
      });
    });
    name.value = 123;

    const url = computed(() => {
      return `https://api.safarpark.uz/api/posts`;
    });
    const { pending, data, error } = useFetch(url);

    // onMounted(async () => {
    //   post.value = await $axios.get(`https://api.safarpark.uz/api/posts/${id.value}`);
    //   console.log("good", post);
    // });
    watch(name, (newVal, lastVal) => {});
    return {
      count,
      countUp,
      postsData,
      pending,
      data,
      id,
      error,
      text,
      post,
      slides,
      name,
    };
  },
});
</script>
<template>
  <div>
    <Swiper
      class="swiper-cards"
      :width="440"
      :modules="[SwiperAutoplay, SwiperEffectCards]"
      :slides-per-view="1"
      :loop="true"
      :effect="'cards'"
      :autoplay="{
        delay: 1000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide
        v-for="(slide, idx) in slides"
        :key="idx"
        :style="`background-color: ${slide.bg}; color: ${slide.color}`"
      >
        {{ idx }}
      </SwiperSlide>
    </Swiper>
    <Swiper
      :height="300"
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 1000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide
        v-for="(slide, idx) in slides"
        :key="idx"
        :style="`background-color: ${slide.bg}; color: ${slide.color}`"
      >
        {{ idx }}
      </SwiperSlide>

      <!-- useSwiper() within a swiper instance -->
      <SwiperControls />
    </Swiper>
    <h1>Good name {{ name }}</h1>
    <h1>Good error</h1>
    <h1>Good error</h1>
    <div v-if="error || !data">
      <h1>Good error</h1>
      <h1>Good error</h1>
      <h1>Good error</h1>
      <h1>Good error</h1>
      <h1>Good error</h1>
    </div>
    <div v-else>
      <input type="text" v-model="text" />
      <a-button type="primary" @click="countUp">Count {{ $good(text) }}</a-button>
      <nuxt-link to="/">Home</nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}
.swiper-cards {
  width: 240px;
  height: 240px;
}
.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}
</style>
