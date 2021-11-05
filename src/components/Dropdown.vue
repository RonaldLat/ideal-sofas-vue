<script>
export default {
  name: "Dropdown",
  props: ["list"],
  setup() {},
};
</script>
<template>

  <transition
  enter-active-class="overflow-hidden transition-all ease-out"
  leave-active-class="overflow-hidden transition-all ease-in"
  enter-class="scale-100 "
  enter-to-class="opacity-100 "
  leave-class="opacity-100 "
  leave-to-class="scale-0 "
  >

  <ul v-show="list.open" class="flex flex-col gap-1 pl-4 transition-all ">
    <router-link
      to="/homeOffice"
      v-for="(item, index) in list.subnav"
      :key="'item' + index"
      class="py-1 rounded-sm bg-gradient-to-r from-gray-700 via-gray-900 to-black"
    >
      <span class="flex items-center justify-between px-2 tracking-widest text-gray-300 divide-x-2 font-nunito">
        <div class="uppercase" >{{ item.title }}</div>
        <svg
          v-if="item.subnav"
          class="text-gray-100 fill-current"
          width="32px"
          height="32px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          color="#000000"
        >
          <path
            fill-rule="evenodd"
            d="M5.22 8.72a.75.75 0 000 1.06l6.25 6.25a.75.75 0 001.06 0l6.25-6.25a.75.75 0 00-1.06-1.06L12 14.44 6.28 8.72a.75.75 0 00-1.06 0z"
          ></path>
        </svg>
      </span>

      <Dropdown :list="item" v-if="item.subnav" class="pl-5" />
    </router-link>
  </ul>

  </transition>
</template>
