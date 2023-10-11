import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MasonryWall from '@yeger/vue-masonry-wall'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faCircleCheck, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faBars, faPhone, faShop, faStar, faX } from '@fortawesome/free-solid-svg-icons'



library.add(faInstagram, faTiktok, faEnvelope, faStar, faCircleCheck, faStar, faX, faShop, faPhone, faBars)
import './assets/main.css'

const app = createApp(App)
app.use(router, MasonryWall)
app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')