<template>
  <div class="Container">
    <div class="ContainerAns">
      <CovidIcon />
      <h3>新型コロナ 受診相談窓口へご連絡ください</h3>
        <dl v-if="bool">
          <dt>
            平日（日中）
          </dt>
          <dd>
            <a href="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html" target="_blank" rel="noopener">
              各保健所の電話番号は<br />
              福祉保健局HPへ
              <i class="fas fa-external-link-alt"></i>
            </a>
          </dd>
        </dl>
        <dl v-else>
          <dt>
            平日（夜間）
          </dt>
          <dd>
            午後5時から翌朝午前9時
          </dd>
          <dt>
            土日祝 終日
          </dt>
          <p>
            <a class="tel" href="tel:0353204592">
              <FacaIcon />
              0353204592
            </a>
          </p>
        </dl>
    </div>
  </div>
</template>

<script>
import FacaIcon from '../../../../static/phone-24px.svg'
import CovidIcon from '../../../../static/covid.svg'
import JapaneseHolidays from'japanese-holidays'
export default {
  components: {
    FacaIcon, CovidIcon
  },
  data() {
    return {
      bool: true
    }
  },
  mounted() {
    let date = new Date();
    let hour = date.getHours();
    let day = date.getDay();
    var holiday = JapaneseHolidays.isHoliday(date);

    if((hour >= 17) || (day >= 6) || (holiday)) {
      return this.bool = false;
    }else if ((hour > 9) && (day > 1)) {
      return this.bool = true;
    }
  }
}
</script>
