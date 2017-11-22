<template>
  <div id="bar">
    <footer class="bar">
      <ul>
        <li v-for="lis in ul">{{seller.bulleti}}</li>
      </ul>
      <p> 我是： {{$store.state.author}}</p>

    </footer>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'footerDiv',
  props: {
    seller: {
      type: Object
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">


</style>
