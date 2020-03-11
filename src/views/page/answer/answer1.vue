<template>
  <div class="page1 container">
    <h3>新型コロナ 受診相談窓口</h3>

      <dl v-if="bool">
        <dl>{{bool}}</dl>
        <dd>テストですよ</dd>
      </dl>
      <dl v-else>
        <dl>{{bool}}</dl>
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
    let day = date.getDay();
    if((hour >= 17) || (day >= 6)) {
      return this.bool = false;
    }else if ((hour >= 9) && (day >= 1)) {
      return this.bool = true;
    }else{
      return this.bool = false;
    }
  }
}
</script>
