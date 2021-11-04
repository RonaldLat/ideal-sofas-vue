<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    let store = useStore();
    let cart = computed(() => store.state.cart);
    return {
      cart,
    };
  },
};
</script>

<template>
  <div class="relative w-10 h-10">
    <img src="/images/cart.png" alt="" class="relative" />
    <p class="absolute -top-1 -right-2">{{ cart.length }}</p>
    <div v-for="product in cart" :key="product.id" class="relative left-0 z-50 hidden w-56 bg-green-200">
      <div>
      <p>{{ product }}</p>
      </div>

    </div>
  </div>
</template>
