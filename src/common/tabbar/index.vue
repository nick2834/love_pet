<template>
  <div class="tabberWarp">
    <div class="warp">
      <Item
        :txt="item.txt"
        :page="item.page"
        @change="getVal"
        v-for="item in tabbarDes"
        :sel="selected"
        :key="item.page"
      >
        <img :src="item.normalImg" slot="normalImg" />
        <img :src="item.activeImg" slot="activeImg" />
      </Item>
    </div>
  </div>
</template>
<script>
import Item from "./Item";
export default {
  components: {
    Item,
  },
  data() {
    return {
      selected: "skin",
      tabbarDes: [
        {
          txt: "首页",
          page: "home",
          normalImg: require("../../assets/images/home.png"),
          activeImg: require("../../assets/images/home-sel.png"),
        },
        {
          txt: "圈子",
          page: "circle",
          normalImg: require("../../assets/images/circle.png"),
          activeImg: require("../../assets/images/circle-sel.png"),
        },
        {
          txt: "消息",
          page: "news",
          normalImg: require("../../assets/images/news.png"),
          activeImg: require("../../assets/images/news-sel.png"),
        },
        {
          txt: "我的",
          page: "mine",
          normalImg: require("../../assets/images/mine.png"),
          activeImg: require("../../assets/images/mine-sel.png"),
        }
      ],
    };
  },
  methods: {
    getVal: function(res) {
      this.selected = res;
    },
  },
};
</script>
<style type="less">
.warp {
  width: 100%;
  border-top: 1px solid #eee;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 0;
}
.warp img {
  width: 30px;
  height: 30px;
}
.tabberWarp img {
  margin-top: 10px;
  margin-bottom: 5px;
}
.tabberWarp {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
}
</style>
