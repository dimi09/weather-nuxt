<template>
  <section class="current-items">
    <div class="dblock temp-prompt">
      <div class="temp" >{{ roundTemp }}<span> °C</span></div>
      <div class="desc" >{{ data.weather[0]?.description }}</div>
    </div>
    <div class="temp-img">
    <img :src="iconUrl" class="img-responsive" alt="">
   </div>
  </section>
</template>

<script>

export default {
  props:['data'],

  computed: {
    iconUrl() {
      return `https://openweathermap.org/img/w/${this.data?.weather[0]?.icon}.png`;
    },
    roundTemp() {
      return  Math.round(this.data?.temp) ;
    },
  },
}
</script>

<style lang="scss" scooped>
.current-items {
  background-color:#fdfdfd;
  max-height: 250px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .temp-prompt{
    .temp {
      font-size: 36px;
    }
    .desc {
      margin-top: 5px;
      font-size: 14px;
      color: #8a8a8a;
    }
  }
  .temp-img {
    img {
      width: 80px;
      height: 80px;
    }
  }
}
</style>