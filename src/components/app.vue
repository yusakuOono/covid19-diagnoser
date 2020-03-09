<template>
  <div class="wrap">
    <GLOBALHEADER/>
        <router-view class="vuews"></router-view>
    <GLOBALFOOTER/>
  </div>
</template>

<script>
import GLOBALHEADER from '../components/GlobalHeader.vue';
import GLOBALFOOTER from '../components/GlobalFooter.vue';
export default {
  components: {
    GLOBALHEADER,
    GLOBALFOOTER
  }
}
</script>

<style>
.wrap {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
