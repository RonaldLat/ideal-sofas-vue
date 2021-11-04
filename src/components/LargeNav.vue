<script>
import { ref } from "vue";
export default {
name: 'LargeNav',
  setup() {
    let navItems = [
      {
        navName: "office",
        navIcon: "/images/office.png",
        link: "office",
      },
      {
        navName: "home office",
        navIcon: "/images/home-office.png",
        link: "homeOffice",
      },
      {
        navName: "living room",
        navIcon: "/images/living-room.png",
        link: "living-room",
      },
      {
        navName: "dining",
        navIcon: "/images/dining.png",
        link: "dining",
      },
      {
        navName: "bedroom ",
        navIcon: "/images/bedroom.png",
        link: "bedroom ",
      },
      {
        navName: "kids room",
        navIcon: "/images/kids-room.png",
        link: "kids-room",
      },
      {
        navName: "bed linen ",
        navIcon: "/images/bed-linen.png",
        link: "bed-linen ",
      },
      {
        navName: "decor",
        navIcon: "/images/decor.png",
        link: "decor",
      },
      {
        navName: "outdoor ",
        navIcon: "/images/outdoor.png",
        link: "outdoor ",
      },
      {
        navName: "flooring ",
        navIcon: "/images/flooring.png",
        link: "flooring ",
      },
    ];

    navItems = ref(navItems);
    return { navItems };
  },
};
</script>


<template>
  <div
    class="hidden w-full grid-cols-5 grid-rows-2 gap-2 md:grid place-items-center"
  >
    <router-link
      v-for="item in navItems"
      :key="item.navName"
      :to="item.link"
      class="flex flex-col items-center justify-center w-20 group"
    >
      <img :src="item.navIcon" alt="" class="w-auto h-16" />
      <span class="text-center uppercase group-hover:text-green-600">{{
        item.navName
      }}</span>
    </router-link>
  </div>
</template>

