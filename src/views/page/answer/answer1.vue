<template>
  <div class="page1 container">
    <h3>新型コロナ 受診相談窓口</h3>

      <dl v-if="bool">
        <dl>{{bool}}</dl>
        <dd>テストですよ</dd>
      </dl>
      <dl v-else>
        <dl>ああ</dl>
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
  mounted() {
    let date = new Date();
    let hour = date.getHours();
    if(hour >= 9 || 17 <= hour){
      return this.bool = true;
    }else{
      return this.bool = false;
    }
  }
}
</script>
