<template>
 <div class="home container">
   <ul>
     <li><router-link to='Page2'>はじめる</router-link></li>
   </ul>
 </div>
</template>

<script>
 export default {
  name: 'Home'
 }
</script>

<style lang="scss">
  .container{
    max-width: 60%;
    margin: auto;
    ul{
      &.towColumn{
        display: flex;
        flex-wrap: wrap;
        li{
          width: 46%;
          margin: 0 0 0 2%;
          &:first-child{
            margin: 0 2% 0 0;
          }
        }
      }
      li{
        list-style: none;
        width: 100%;
        margin: auto;
        a{
          display: block;
          background: #eee;
          padding: 16px;
          font-weight: bold;
        }
      }
    }
  }
  //module
  a{
    text-decoration: none;
    color: #000;
    &:active{
      color: #000;
    }
  }
</style>
