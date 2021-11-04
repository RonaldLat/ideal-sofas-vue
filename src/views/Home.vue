<script>
import Carousel from "./../components/CarouselHome.vue";
import LargeNav from "./../components/LargeNav.vue";
import Announce from "./../components/Announcements.vue";
import Categories from "./../components/Categories.vue";
import Discover from "./../components/Discover.vue";

export default {
name: 'HomePage',
components: {LargeNav,  Carousel, Announce, Categories, Discover},
  setup() {},
};
</script>
<template>
<LargeNav />
<Carousel />
<Announce />
<Categories />
<Discover />
</template>
