<template>
    <h2 class="leading-relaxed text-center text-7xl font-birthstone line-clamp-3">
      What would you like to shop <br> today?</h2>

    <div class="grid w-full gap-6 md:grid-cols-3 gap-y-3">
      <router-link
        v-for="category in categories"
        :key="category.name"
        :to="category.link"
        class="flex flex-col items-center justify-center w-full"
      >
        <img class="h-5/6" :src="category.img" alt="" />
        <p class="text-4xl font-birthstone">{{ category.name }}</p>
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
