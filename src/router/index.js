import Vue from "vue";
import Router from "vue-router";

const Home = () =>
    import ( /* webpackChunkName: "Home" */ "@/pages/home/Index.vue");
const Circle = () =>
    import ( /* webpackChunkName: "Circle" */ "@/pages/circle/Index.vue");
const News = () =>
    import ( /* webpackChunkName: "News" */ "@/pages/news/Index.vue");
const Mine = () =>
    import ( /* webpackChunkName: "Mine" */ "@/pages/mine/Index.vue");

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: "/(home|index)?",
            name: "Home",
            component: Home,
            meta: {
                title: "首页"
            }
        },
        {
            path: "/(circle|index)?",
            name: "Circle",
            component: Circle,
            meta: {
                title: "圈子"
            }
        },
        {
            path: "/(news|index)?",
            name: "News",
            component: News,
            meta: {
                title: "消息"
            }
        },
        {
            path: "/(mine|index)?",
            name: "Mine",
            component: Mine,
            meta: {
                title: "我的"
            }
        },
        {
            path: "/index.html",
            name: "HomeHtml",
            component: Home,
        },
    ],
});