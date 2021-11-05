<script>
export default {
  setup() {},
};
</script>

<template>
  <div class="my-12">
    <div class="mb-9">
      <h3 class="relative text-3xl text-center uppercase">quick inquiry
      <span class="absolute w-16 h-1 bg-green-500 rounded -bottom-4 transform left-1/2 -translate-x-1/2"></span></h3>
    </div>
    <h3 class="text-xl text-center mb-9">Fill the form below, One of our sales representatives will contact you soon.</h3>
    <form  class="flex flex-col w-full mx-auto gap-6 max-w-screen-sm">
    <input class="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Name"/>
    <input class="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" type="email" placeholder="Email"/>
    <input class="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" type="tel" placeholder="Phone"/>

<div class="relative inline-block w-full text-gray-700">
  <select class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
    <option>How did you hear about us?</option>
    <option>Newspapers / Magazines / Promotional Banners</option>
    <option>Google or Other search engines</option>
    <option>Social Media Ads</option>
    <option>Social Media Ads</option>
    <option>Friends / Family</option>
    <option>Other</option>
  </select>
  <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
  </div>
</div>

<textarea class="w-full h-24 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"></textarea>

<button class="h-10 px-6 text-lg text-gray-600 uppercase bg-gray-300 rounded-lg w-44 transition-colors duration-150 focus:shadow-outline hover:text-gray-400 duration-300 hover:bg-gray-800 transition">send inquiry</button>


    </form>
  </div>
</template>
