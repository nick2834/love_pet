import Vue from 'vue'
import Router from 'vue-router'
import App from '../../App.vue'
import store from '../../store'
import Circle from '@/pages/circle/Index.vue';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/(circle|index)?',
        name: 'Circle',
        component: Circle,
    }],
})

export default function createApp() {
    const container = document.createElement('div')
    container.id = 'app'
    document.body.appendChild(container)

    Vue.config.productionTip = false

    return new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App)
    })
}