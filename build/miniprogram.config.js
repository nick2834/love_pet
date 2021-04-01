/**
 * 配置参考：https://wechat-miniprogram.github.io/kbone/docs/config/
 */
const path = require("path");

module.exports = {
    origin: "https://test.miniprogram.com",
    entry: "/",
    router: {
        home: [
            "/(home|index)?",
            "/(circle|index)?",
            "/(news|index)?",
            "/(mine|index)?",
            "/index.html",
        ],
    },
    redirect: {
        notFound: "home",
        accessDenied: "home",
    },
    generate: {
        autoBuildNpm: "npm",
        appWxss: "display",
        weui: true,
        tabBar: {
            color: "#777777",
            selectedColor: "#333333",
            backgroundColor: "#ffffff",
            list: [{
                    pageName: "home",
                    text: "主页",
                    iconPath: path.resolve(__dirname, "../src/assets/images/home.png"),
                    selectedIconPath: path.resolve(
                        __dirname,
                        "../src/assets/images/home-sel.png"
                    ),
                },
                {
                    pageName: "circle",
                    text: "圈子",
                    iconPath: path.resolve(__dirname, "../src/assets/images/circle.png"),
                    selectedIconPath: path.resolve(
                        __dirname,
                        "../src/assets/images/circle-sel.png"
                    ),
                },
                {
                    pageName: "news",
                    text: "消息",
                    iconPath: path.resolve(__dirname, "../src/assets/images/news.png"),
                    selectedIconPath: path.resolve(
                        __dirname,
                        "../src/assets/images/news-sel.png"
                    ),
                },
                {
                    pageName: "mine",
                    text: "我的",
                    iconPath: path.resolve(__dirname, "../src/assets/images/mine.png"),
                    selectedIconPath: path.resolve(
                        __dirname,
                        "../src/assets/images/mine-sel.png"
                    ),
                },
            ],
        },
    },
    app: {
        "navigationStyle": "custom",
        backgroundTextStyle: 'light',
        navigationBarTextStyle: 'white',
        navigationBarTitleText: '小宠',
    },
    appExtraConfig: {
        sitemapLocation: "sitemap.json",
    },
    global: {
        share: true,
        windowScroll: false,
        backgroundColor: "#F7F7F7",
    },
    pages: {
        news: {
            loadingText: "加载中...",
            share: false,
            navigationStyle: "custom",
        },
    },
    optimization: {
        domSubTreeLevel: 10,

        elementMultiplexing: true,
        textMultiplexing: true,
        commentMultiplexing: true,
        domExtendMultiplexing: true,

        styleValueReduce: 5000,
        attrValueReduce: 5000,
    },
    projectConfig: {
        projectname: "kbone-template-vue-ui",
        appid: "wxdf997a34caa3dc52",
    },
};