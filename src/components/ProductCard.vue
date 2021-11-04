<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  props: ["product"],
  setup() {
    let store = useStore();
    let cart = computed(() => store.state.cart);
    let products = computed(() => store.state.homeOffice);
    let cartItems = cart.value.length;

    let addToCart = (id) => {
      console.log("id", id);
      let item = products.value.find((x) => x.id === id);
      if (cart.value.length == 0) {
        console.log("1");
        cart.value.push(item);
      } else {
        if (cart.value.some((e) => e.id === id)) {
          console.log("2");
          /*cartItems += 1;*/
        } else {
          console.log("3");
          cart.value.push(item);
        }
      }
    };

    return {
      cart,
      addToCart,
      cartItems,
    };
  },
};
</script>

<template>
  <div class="relative flex flex-col items-start justify-center gap-2 pb-4">
    <img
      v-if="product.offer"
      :src="`/offers/${product.offer}`"
      alt=""
      class="absolute top-0 right-0 w-auto h-14"
    />
    <router-link :to="`/details/${product.id}`">
      <img :src="`/homeOffice/${product.img}`" alt="" class="" />
    </router-link>
    <p>{{ product.name }}</p>
    <p>{{ product.items }}</p>
    <div class="relative w-full overflow-hidden lg:h-6">
      <div
        class="w-full h-full transition duration-200 transform lg:top-0 lg:left-0 lg:absolute lg:hover:-translate-y-full"
      >
        <p class="h-full">KSH {{ product.price }}</p>
        <p v-if="product.oldPrice" class="h-full py-2 line-through">
          KSH {{ product.oldPrice }}
        </p>
        <a
          @click="addToCart(product.id)"
          class="flex h-full text-red-500 cursor-pointer hover:text-green-500"
          >
<span><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#000"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></span>
          <span>Add to inquiry</span></a
        >
      </div>
    </div>
  </div>
</template>
