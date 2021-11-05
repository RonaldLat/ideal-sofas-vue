<template>
  <div class="w-full my-6 max-h-xl">
    <swiper 
      class="w-full"
      :grabCursor="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: true,
      }"
      :pagination="{
        dynamicBullets: true,
      }"
      :speed=2000
      :effect="'creative'"
      :loop="true"
      :creativeEffect="{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
      @swiper="onSwiper" 
      @slideChange="onSlideChange"
    >
      <swiper-slide class="w-full ">
        <img src="/carousel/slide1.jpg" alt=""  class="object-cover w-full h-96 max-h-xl"/>
      </swiper-slide>
      <swiper-slide class="w-full ">
        <img src="/carousel/slide2.jpg" alt=""  class="object-cover w-full h-96 max-h-xl"/>
      </swiper-slide>
      <swiper-slide class="w-full ">
        <img src="/carousel/slide3.jpg" alt=""  class="object-cover w-full h-96 max-h-xl"/>
      </swiper-slide>
      <swiper-slide class="w-full ">
        <img src="/carousel/slide4.jpg" alt=""  class="object-cover w-full h-96 max-h-xl"/>
      </swiper-slide>
      <swiper-slide class="w-full ">
        <img src="/carousel/slide5.jpg" alt=""  class="object-cover w-full h-96 max-h-xl"/>
      </swiper-slide>
      <swiper-slide class="w-full ">
        <img src="/carousel/slide6.jpg" alt=""  class="object-cover w-full h-96 max-h-xl"/>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  EffectCreative,
} from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, EffectCreative]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
