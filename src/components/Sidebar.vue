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
    };
  },
};
</script>
<template>
  <div class="fixed top-0 left-0 z-50 w-1/2 h-screen text-gray-100 transition-all bg-gray-900">
    <ul class="flex flex-col gap-1 m-1 rounded-md">
      <li
        v-for="(item, index) in navigation"
        :key="'item' + index"
        class="py-2 bg-gray-700 "
      >

        <span v-if="item.subnav" class="flex items-center justify-between px-3 text-gray-100">
        <div @click="item.open = !item.open" class="text-lg font-bold uppercase cursor-pointer font-damian">{{ item.title }}</div>
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
</template>
