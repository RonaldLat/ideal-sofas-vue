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
    <div class="w-full bg-yellow-200">{{ details }}</div>
    <div class="w-full ">
      <swiper
        :pagination="{
          type: 'fraction',
        }"
        :navigation="true"
        class="w-full h-96 mySwiper"
      >
        <swiper-slide
          class="w-full h-full "
          v-for="img in 4"
          :key="img.index"
        >
          <img
            :src="`/images/${productID}-${img}.jpg`"
            alt=""

            class="object-cover w-full h-full"
          />
        </swiper-slide>
      </swiper>
    </div>
    <div>

    </div>
  </div>
</template>
