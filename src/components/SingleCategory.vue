<script>
import ProductCard from "./../components/ProductCard.vue";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

export default {
  components: {
    ProductCard,
  },
  setup() {
    let store = useStore();

    let activeCategory = computed(() => store.state.activeCategory);
    let displayNames = computed(() => store.state.categoryNames);
    let x = activeCategory.value.toString()
    let displayName = displayNames.value[x]

    return {
      products: computed(() => store.state[activeCategory.value]),
      activeCategory,
      displayName,
      x
      
    };
  },
};
</script>
<template>
  <div
    class="inline-flex flex-wrap items-center justify-between w-full gap-2 my-3 "
  >
    <div class="flex items-center justify-between w-auto gap-2 ">
      <router-link to="/" class="flex items-center ">
        <span class="pr-2" 
          ><svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            color="#000"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg
        ></span>
        <span>Home /</span>
      </router-link>
      <router-link :to="activeCategory" class="capitalize">{{ displayName }} </router-link>
    </div>

    <div class="flex items-center gap-1 px-3 py-2 bg-gray-300 border-gray-900 rounded">
      <span> Sort by price low to high</span>
      <span
        >
        <svg width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000000"><path d="M11.646 15.146L5.854 9.354a.5.5 0 01.353-.854h11.586a.5.5 0 01.353.854l-5.793 5.792a.5.5 0 01-.707 0z"></path></svg>
        </span>
    </div>
  </div>

  <div
    class="grid w-full gap-6 mt-3 bg-gray-100 gap-y-14 md:grid-cols-3 place-items-center"
  >
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
