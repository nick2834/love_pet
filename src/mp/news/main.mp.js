import Vue from 'vue'
import Router from 'vue-router'
import App from '../../App.vue'
import store from '../../store'
import News from '@/pages/news/Index.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/(news|index)?',
        name: 'News',
        component: News,
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