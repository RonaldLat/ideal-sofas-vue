<template>

<div class="flex flex-col items-center justify-center gap-8 py-4 mt-7">
  <div class="flex flex-wrap items-center justify-center w-full gap-2 divide-x-2 divide-green-500">
    <router-link v-for="link in links" :key="link.link" :to="link.link" class="pl-2 hover:text-green-500">
      {{ link.name }}</router-link
    >
  </div>
  <div class="flex items-center justify-center w-full">
    <img src="/images/footer-logo.jpg" alt="" />
  </div>

  <div class="w-full text-center">
    <span>@2021 </span
    ><span class="hover:text-green-500">
      <router-link to="www.idealsofas.co.ke">Ideal Sofas. </router-link>
    </span>
    <span>All rights reserved</span>
  </div> 
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    let store = useStore();
    return {
      links: computed(() => store.state.footerLinks),
    };
  },
};
</script>
