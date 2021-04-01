<template>
  <div>
    <mp-msg type="success" title="操作成功">
      <div slot="desc">
        内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
      </div>
      <div slot="extend">
        <div>1. 说明1</div>
        <div>2. 说明2</div>
      </div>
      <div slot="handle" style="margin: 0 20px">
        <wx-button class="wx-button" type="primary">主要操作</wx-button>
        <wx-button class="wx-button" type="default">辅助操作</wx-button>
      </div>
    </mp-msg>
  </div>
</template>

<script>
export default {
  name: "mine",
  created(){
    console.log(this.$route);
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style></style>
