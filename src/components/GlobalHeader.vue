<template>
  <header :class="$style.Header">
    <p :class="$style.HeaderTitle">新型コロナウイルス<br :class="$style.HeaderTitleRow" />感染症の相談窓口</p>
  </header>
</template>

<script>
export default {

}
</script>

<style module lang="scss">
  .Header{
    margin-bottom: 2rem;
    @media only screen and (max-width:768px){

    }
    &Title{
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 2.5rem;
      @media only screen and (max-width:768px){
        font-size: 1.75rem;
      }
      &Row{
        display: none;
        @media only screen and (max-width:768px){
          display: block;
        }
      }
    }
  }
</style>
