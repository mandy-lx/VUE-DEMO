<template>
  <div class="comment">
  	<p>评价</p>
  	<input type="text" v-model="inputTxt">
  	<button @click="setAuthor">点击修改姓名</button>
  	<p> bar组件显示 {{$store.state.author}}</p>

  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    methods: {
      setAuthor () {
        this.$store.commit('newAuthor', this.inputTxt);
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
.comment
  background: pink
</style>
