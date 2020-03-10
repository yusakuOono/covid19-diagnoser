<template>
  <div class="page1 container">
    <h3>新型コロナ 受診相談窓口</h3>
    <dl v-if="bool">
      <dl>{{bool}}</dl>
      <dd>テストですよ</dd>
    </dl>
    <dl v-else>
      <dl>{{ h }}</dl>
      <dd>朝ですよー</dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bool: true
    }
  },
  mouted: function() {
      let Date = new Date();
      let time = Date.getHours();
      if( 1 > time ){
        return this.bool = false
      }
  }
}
</script>
