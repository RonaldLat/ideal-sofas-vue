<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ["details", "productID"],
  setup() {},
};
</script>

<template>
  <div class="w-full">
    <!-- <div class="w-full bg-yellow-200">{{ details }}</div> -->
    <div class="w-full">
      <swiper
        :pagination="{
          type: 'fraction',
        }"
        :navigation="true"
        class="w-full h-96 mySwiper"
      >
        <swiper-slide class="w-full h-full" v-for="img in 6" :key="img.index">
          <img
            :src="`/images/${productID}-${img}.jpg`"
            alt=""
            class="object-cover w-full h-full"
          />
        </swiper-slide>
      </swiper>
    </div>

    <div>
      <h3 class="py-3 text-6xl font-birthstone">{{ details.name }}</h3>
      <div class="flex gap-4 text-red-500">
        <p class="line-through">KSH {{ details.oldPrice }}</p>
        <p class>KSH {{ details.price }}</p>
      </div>

      <div class="flex gap-4">
        <div class="flex items-center h-10">
          <button
            class="inline-block w-6 h-full text-center border-2 border-r-0 border-gray-400 "
          >
            -
          </button>
          <input
            type="text"
            name=""
            id=""
            v-model="details.quantity"
            class="inline-block h-full text-center border-2 border-gray-400 w-9"
          />
          <button
            class="inline-block w-6 h-full text-center border-2 border-l-0 border-gray-400 "
          >
            +
          </button>
        </div>

        <button class="px-4 py-2 text-gray-200 bg-red-500 rounded-sm">
          ADD TO INQUIRY
        </button>
      </div>
    </div>
  </div>

  <div></div>
</template>
