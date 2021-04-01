<template>
  <div id="app">
    <mp-navigation-bar :title="title" :back="false"></mp-navigation-bar>
    <router-view />
    <Tabbar />
  </div>
</template>

<script>
import Vue from "vue";
import Tabbar from "@/common/tabbar";
export default Vue.extend({
  name: "App",
  data() {
    return {
      title: "",
    };
  },
  components: { Tabbar },
  mounted() {
    const { title } = this.$route.meta;
    this.title = title;
  },
});
</script>
