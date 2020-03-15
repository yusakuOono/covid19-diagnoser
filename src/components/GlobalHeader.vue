<template>
  <header :class="$style.Header">
    <p :class="$style.HeaderTitle">新型コロナウイルス感染症の相談窓口</p>
  </header>
</template>

<script>
export default {

}
</script>

<style module lang="scss">
  .Header{
    margin-bottom: 2rem;
    &Title{
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 2.5rem;
    }
  }
</style>
