import './index.js';
import '~/assets/css/milligram.css';
import DefaultLayout from '~/layouts/Default.vue'
export default function (Vue,{ head, router, isServer } ) {
  Vue.component('Layout', DefaultLayout)
}
