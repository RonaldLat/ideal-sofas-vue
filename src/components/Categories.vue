<template>
    <h2 class="text-4xl leading-loose text-center line-clamp-3">What would you like to shop today?</h2>

    <div class="w-full grid md:grid-cols-3 gap-6 gap-y-3">
      <router-link
        v-for="category in categories"
        :key="category.name"
        :to="category.link"
        class="flex flex-col items-center justify-center w-full"
      >
        <img class="h-5/6" :src="category.img" alt="" />
        <p class="text-2xl">{{ category.name }}</p>
      </router-link>
    </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Categories",
  setup() {
    let store = useStore();

    return {
      categories: computed(() => store.state.categories),
    };
  },
};
</script>
