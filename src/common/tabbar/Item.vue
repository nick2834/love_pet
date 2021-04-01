<template>
  <div class="itemWarp flex_mid" @click="changePage">
    <span v-show="!bol">
      <slot name="normalImg"></slot>
    </span>
    <span v-show="bol">
      <slot name="activeImg"></slot>
    </span>
    <span v-text="txt"></span>
  </div>
</template>
<script type="text/javascript">
export default {
  name: "Item",
  props: {
    txt: {
      type: String,
    },
    page: {
      type: String,
    },
    sel: {
      type: String,
    },
  },
  computed: {
    bol: function() {
      if (this.sel == this.page) {
        return true;
      }
      return false;
    },
  },
  methods: {
    changePage() {
      if (process.env.isMiniprogram) {
        window.location.href = "/" + this.page
      } else {
        //点击跳转对应的页面
        this.$router.push("/" + this.page);
        console.log("I am in Web");
      }
      this.$emit("change", this.page);
    },
  },
};
</script>
<style lang="less">
.itemWarp {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  span {
    font-size: 12px;
  }
}
</style>
