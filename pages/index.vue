<script setup lang="ts">
import { Drag, DropList } from "vue-easy-dnd";

// definePageMeta({
//   pageTransition: {
//     name: "page",
//   },
//   layout: "custom",
// });
const layout = "custom";
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
const items = ref(["a", "b", "c", "d", "e"]);
const url = computed(() => {
  return `https://api.safarpark.uz/api/posts`;
});
const onInsert = (event: any) => {
  items.value.splice(event.index, 0, event.data);
};
const count = ref(1);
const { data: good } = await useFetch(() => `/api/test`);
const { data: hello } = await useFetch(() => `/api/hello`);

const { pending, data: post, error } = useFetch<any>(url);
</script>
<template>
  <!-- <div v-if="error || !data">
    <h1>asdas</h1>
  </div> -->
  <div>
    <h1>Good</h1>
    <h1>Good</h1>
    <h1>Good</h1>
    <h1>Good</h1>
    <h1>Good</h1>
    <h1>Good</h1>
    <nuxt-link to="/about">nuxt link</nuxt-link>
    <nuxt-link to="/home">Home</nuxt-link>
    <p>{{ $good("good") }}</p>
    <div class="row good">
      <div class="col-3">
        <drag v-for="n in [1, 2, 3, 4, 5]" :data="n" class="item" :key="n">{{ n }}</drag>
      </div>
      <drop-list
        :items="items"
        class="list"
        @insert="onInsert"
        @reorder="$event.apply(items)"
      >
        <template v-slot:item="{ item }">
          <drag class="item" :key="item">{{ item }}</drag>
        </template>
        <template v-slot:feedback="{ data }">
          <div class="item feedback" :key="data">{{ data }}</div>
        </template>
      </drop-list>
    </div>
    <pre class="text-left"><code>adsa{{ good }}good</code></pre>
    <h1>hello{{ hello }}</h1>
    <button @click="count++">count</button>
    <!-- <p>{{ data.posts.data[0].id }}</p> -->
    <!-- <p>Posts {{ posts.posts }}</p> -->
    Page visits: {{ good }}
  </div>
</template>


<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.list {
  border: 1px solid black;
  margin: 100px auto;
  width: 200px;
}
.item {
  padding: 20px;
  margin: 10px;
  background-color: rgb(220, 220, 255);
  display: flex;
  align-items: center;
  justify-content: center;
}
.feedback {
  background-color: rgb(255, 220, 220);
  border: 2px dashed black;
}

.drag-image {
  background-color: rgb(220, 255, 220);
  transform: translate(-50%, -50%);
}
.col-3 {
  width: 200px;
}
.row {
  display: flex;
}
</style>
