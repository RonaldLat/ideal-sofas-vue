<script>
import SingleCategory from "./../components/SingleCategory.vue";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  components: { SingleCategory },

  setup() {
    const store = useStore();
    const route = useRoute();

    let newCategory = route.params.categoryName;
    store.commit("updateActiveCategory", newCategory);

    let activeCategory = computed(()=>store.state.activeCategory);
    activeCategory= activeCategory.value 
    let title = computed(()=>store.state.categoryNames)
    title =title.value[activeCategory]

    return {
      lat: computed(() => store.state.lat),
      title,

      products: computed(() => store.state.categoryID),
    };
  },
};
</script>

<template>
  <h2 class="w-full py-4 my-4 text-4xl text-center text-gray-700 uppercase bg-gray-100 rounded" > {{ title }}</h2>
  <SingleCategory />
</template>
