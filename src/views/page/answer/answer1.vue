<template>
  <div class="page1 container">
    <h3>新型コロナ 受診相談窓口へ</h3>
      <dl v-if="bool">
        <dt>平日（日中）</dt>
        <dd>
          各保健所の電話番号は<br />
          福祉保健局HPへ
        </dd>
      </dl>
      <dl v-else>
        <dt>平日（夜間）</dt>
        <dd>午後5時から翌朝午前9時</dd>
        <dt>土日祝 終日</dt>
      </dl>
  </div>
</template>

<script>
import JapaneseHolidays from'japanese-holidays'
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
    var holiday = JapaneseHolidays.isHoliday(date);

    if((hour >= 17) || (day >= 6) || (holiday)) {
      return this.bool = false;
    }else if ((hour > 9) && (day > 1)) {
      return this.bool = true;
    }
  }
}
</script>
