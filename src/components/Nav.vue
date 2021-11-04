<script>
import Cart from "./Cart.vue";
export default {
  components: { Cart },
  setup() {
    return {};
  },
};
</script>

<template>
  <header
    class="relative flex items-center justify-between w-full max-w-full min-h-6"
  >
    <router-link to="/">
      <img src="/images/logo.jpg" alt="" />
    </router-link>

    <div class="flex justify-end w-full pr-8 gap-3">
      <div>
        <img src="/images/map-store.png" alt="" class="h-10" />
      </div>
      <div>
        <img src="/images/contact.png" alt="" class="h-10" />
      </div>
      <div class="relative">
        <Cart />
      </div>
    </div>
  </header>
</template>
