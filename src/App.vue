<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
import Sidebar from "./components/Sidebar.vue";
import Whatsapp from "./components/Whatsapp.vue"
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';

export default {

components: { Nav, Footer, Sidebar, Whatsapp },
  setup() {
    let store = useStore()
    return {
      sidebarOpen: ()=> store.commit('toggleSidebar'),
      toggleSidebar: computed(()=> store.state.sidebarOpen)
    };
  },
};
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div class="relative w-full min-h-screen px-4 font-nunito">
    <Nav />

      <div
        @click="sidebarOpen"
        class="absolute w-8 cursor-pointer top-3 right-4"
      >
        <span>
          <svg
            width="45"
            height="40"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            color="#000"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </span>
      </div>

<Whatsapp />
    <Sidebar class="transition-transform duration-700 ease-in-out transform" :class="{ '-translate-x-full' :toggleSidebar }" />
    <router-view />
  </div>
  <Footer />
</template>
