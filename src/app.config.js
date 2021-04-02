export default {
    pages: [
        "pages/index/index",
        "pages/circle/index",
        "pages/news/index",
        "pages/mine/index"
    ],
    tabBar: {
        color: "#777777",
        selectedColor: "#333333",
        backgroundColor: "#ffffff",
        borderStyle: "black",
        list: [{
                pagePath: "pages/index/index",
                iconPath: "./assets/tab-bar/home.png",
                selectedIconPath: "./assets/tab-bar/home-sel.png",
                text: "首页",
            },
            {
                pagePath: "pages/circle/index",
                iconPath: "./assets/tab-bar/circle.png",
                selectedIconPath: "./assets/tab-bar/circle-sel.png",
                text: "圈子",
            },
            {
                pagePath: "pages/news/index",
                iconPath: "./assets/tab-bar/news.png",
                selectedIconPath: "./assets/tab-bar/news-sel.png",
                text: "消息",
            },
            {
                pagePath: "pages/mine/index",
                iconPath: "./assets/tab-bar/mine.png",
                selectedIconPath: "./assets/tab-bar/mine-sel.png",
                text: "我的",
            },
        ]
    },
    window: {
        backgroundTextStyle: "light",
        navigationBarBackgroundColor: "#fff",
        navigationBarTitleText: "WeChat",
        navigationBarTextStyle: "black",
    },
};