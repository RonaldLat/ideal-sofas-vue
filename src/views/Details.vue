<script>
import DetailsComp from './../components/DetailsComp.vue'

import { computed } from '@vue/reactivity'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
export default {

components:{ DetailsComp },
  setup() {
  let store = useStore()
  let route = useRoute()

    let productID = route.params.product;
    /*productID.toString()*/
  let details = computed(()=> store.state.details[productID])

  return{
  details,
  productID
  }
    
  },
}
</script>

<template>
  <div class="my-16 mb-24">
  <DetailsComp :productID="productID" :details="details"/>
  </div>
</template>
