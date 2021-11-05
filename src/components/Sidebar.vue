<script>
import Dropdown from "./Dropdown.vue";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  components: { Dropdown },
  setup() {
    let store = useStore();
    let navigation = computed(() => store.state.navigation);

    return {
      navigation,
      sidebarOpen: computed(()=> store.state.sidebarOpen),
        sidebarOpen: ()=> store.commit('toggleSidebar'),
      
    };
  },
};
</script>
<template>
  <div
    class="fixed top-0 left-0 z-50 flex flex-col w-1/2 h-screen gap-6 px-2 pt-16 text-gray-100 transition-all divide-y divide-gray-500 rounded-sm shadow-md bg-gradient-to-br from-black via-black to-whitebg-gradient-to-br via-blackbg-black"
  >
    <!-- component -->
    <!-- This is an example component -->
    <div class="relative w-full pt-2 mx-auto text-gray-600">
      <input
        class="h-10 max-w-full px-5 pr-16 mx-0 text-sm bg-white border-2 border-gray-300 rounded-md focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button type="submit" class="absolute top-0 right-0 mt-5 mr-4">
        <svg
          class="w-4 h-4 text-gray-600 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          style="enable-background: new 0 0 56.966 56.966"
          xml:space="preserve"
          width="100%"
          height="512px"
        >
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
          />
        </svg>
      </button>
    </div>

    <div @click="sidebarOpen" class="absolute text-gray-300 top-2 right-2">
      <svg
        class="w-10 text-gray-300 "
        width="55px"
        height="45px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        color="#000000"
      >
        <path
          fill-rule="evenodd"
          d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"
        ></path>
      </svg>
    </div>

    <div>
      <ul class="flex flex-col justify-center h-full gap-1 m-1 rounded-md">
        <li
          v-for="(item, index) in navigation"
          :key="'item' + index"
          class="py-2 bg-black"
        >
          <span
            v-if="item.subnav"
            class="flex items-center justify-between px-3 text-gray-300"
          >
            <div
              @click="item.open = !item.open"
              class="text-lg font-bold tracking-widest uppercase cursor-pointer font-damian"
            >
              {{ item.title }}
            </div>
            <svg
              class="text-gray-100 cursor-pointer fill-current"
              width="32px"
              height="32px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              color="#000000"
              @click="item.open = !item.open"
            >
              <path
                fill-rule="evenodd"
                d="M5.22 8.72a.75.75 0 000 1.06l6.25 6.25a.75.75 0 001.06 0l6.25-6.25a.75.75 0 00-1.06-1.06L12 14.44 6.28 8.72a.75.75 0 00-1.06 0z"
              ></path>
            </svg>
          </span>

          <Dropdown :list="item" v-if="item.subnav" />
        </li>
      </ul>
    </div>
  </div>
</template>
