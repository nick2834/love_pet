import Vue from 'vue'
import Router from 'vue-router'
import App from '../../App.vue'
import store from '../../store'
import Mine from '@/pages/mine/Index.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/(mine|index)?',
        name: 'Mine',
        component: Mine,
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