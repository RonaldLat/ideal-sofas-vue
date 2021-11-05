<script>
import Inquiry from "./InquiryForm.vue";
import Description from "./DescriptionTab.vue";
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
    Inquiry,
    Description,
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
      <div class="flex flex-col flex-wrap gap-4 mb-10 md:flex-row">
        <h3 class="py-3 text-6xl text-center font-birthstone">{{ details.name }}</h3>

        <div class="flex flex-col items-center justify-around w-full gap-6 md:flex-row">
          <div class="flex gap-4 mb-4 text-red-500">
            <p class="line-through">KSH {{ details.oldPrice }}</p>
            <p class>KSH {{ details.price }}</p>
          </div>
          <div>
            <button
              class="inline-block w-6 h-10 text-center border-2 border-r-0 border-gray-400 "
            >
              -
            </button>
            <input
              type="text"
              name=""
              id=""
              v-model="details.quantity"
              class="inline-block h-10 text-center border-2 border-gray-400 w-9"
            />
            <button
              class="inline-block w-6 h-10 text-center border-2 border-l-0 border-gray-400 "
            >
              +
            </button>
          </div>

          <button class="px-4 py-2 text-gray-200 bg-red-500 rounded-sm w-50">
            ADD TO INQUIRY
          </button>
        </div>
      </div>

      <Description />
      <Inquiry />
    </div>
  </div>

  <div></div>
</template>
