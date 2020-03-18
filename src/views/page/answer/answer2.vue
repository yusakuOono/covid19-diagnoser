<template>
  <div class="Container">
    <div class="ContainerAns">
      <FaceIcon />
      <h3>不安に思う方は下記にご連絡ください</h3>
      <dl>
        <dt>新型コロナコールセンター</dt>
        <dt>午前9時から午後9時（土日祝含む）</dt>
        <dd>
          <a class="tel" href="tel:0570550571">
            0570550571
            <FhoneIcon />
          </a>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import FaceIcon from '../../../../static/sentiment_very_dissatisfied-24px.svg'
import FhoneIcon from '../../../../static/phone-24px.svg'
export default {
  components: {
    FhoneIcon, FaceIcon
  }
}
</script>
