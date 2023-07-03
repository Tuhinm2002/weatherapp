import { createApp } from 'vue'
import './assets/styles/style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
