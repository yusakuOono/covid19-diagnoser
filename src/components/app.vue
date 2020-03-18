<template>
  <div class="Wrap">
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

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  .Wrap {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 8rem;
    @media only screen and (max-width:768px){
      margin-top: 4rem;
    }
    .Container{
      max-width: 60%;
      margin: auto;
      @media only screen and (max-width:768px){
        max-width: 90%;
      }
      ul{
        li{
          list-style: none;
          a{
            display: block;
            background: #00A040;
            color: #fff;
            font-size: 2rem;
            border-radius: 8px;
            padding: 1rem;
            font-weight: bold;
            box-shadow: -1px 2px 5px #808080;
            @media only screen and (max-width:768px){
              font-size: 1.25rem;
            }
          }
        }
      }
      &Question{
        margin-bottom: 4rem;
        dt{
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
          @media only screen and (max-width:768px){
            font-size: 1.5rem;
          }
        }
        dd{
          font-size: 1.5rem;
          margin-bottom: .5rem;
          @media only screen and (max-width:768px){
            font-size: 1.25rem;
          }
          &:nth-last-child(1){
            margin-bottom:0;
          }
          &.Small{
            font-size: 1.25rem;
          }
        }
      }
      &Btn{
        li{
          width: 80%;
          margin: 0 auto 4rem;
        }
      }
      &Towcolumn{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 6rem;
        @media only screen and (max-width:768px){
          margin-bottom: 3rem;
        }
        li{
          width: 46%;
          margin: 0 0 0 2%;
          &:first-child{
            margin: 0 2% 0 0;
          }
        }
      }
      &Ans{
        > svg {
          width: 50px;
          height: 50px;
          > path:not(:first-of-type) {
            fill: #454545;
          }
        }
        h3{
          font-size: 2rem;
          margin-bottom: 1rem;
          @media only screen and (max-width:768px){
            font-size: 1.5rem;
          }
        }
        dl{
          font-size: 1.5rem;
          background: #eee;
          padding: 1.75rem;
          font-weight: bold;
          border-radius: 8px;
          margin-bottom: 2rem;
          @media only screen and (max-width:768px){
            font-size: 1.25rem;
            background: #eee;
            padding: 1.5rem 0.25rem;
            font-weight: bold;
            border-radius: 8px;
            margin-bottom: 2rem;
          }
          dt{
            margin-bottom: 1rem;
          }
          dd{
            .tel{
              display: inline-block;
              position: relative;
              font-size: 3rem;
              @media only screen and (max-width:768px){
                font-size: 2rem;
              }
              svg{
                width: 50px;
                height: 50px;
                position: absolute;
                top: 10%;
                left: -50px;
                @media only screen and (max-width:768px){
                  width: 40px;
                  height: 40px;
                  position: absolute;
                  top: 0%;
                  left: -40px;
                }
              }
            }
          }
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
}
</style>
