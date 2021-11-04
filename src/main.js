import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store.js'
import router  from './router'
import './style.css'

//Vue.use(Vuex)
//Vue.use(router)
//createApp(App).use(router, store).mount('#app')

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app')

