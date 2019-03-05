import VueRouter from 'vue-router'
import Start from './pages/start.vue'

export default new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
        { path: '/', name: 'start', component: Start },
    ],
})
