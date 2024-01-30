<template>
  <section class="info-container mt10">
    <InfoItem :data="feelsLike"/>
    <InfoItem :data="wind"/>
    <InfoItem :data="windGust"/>
    <InfoItem :data="windDeg"/>
    <InfoItem :data="humidity"/>
    <InfoItem :data="pressure"/>
  </section>
</template>

<script>
import InfoItem from './InfoItem.vue'
export default {
  components: { InfoItem },
  props: ['data'],
  data() {
    return {
      informationData:[],
    }
  },
  // Math.round(this.data?.feels_like)
  computed: {
    feelsLike() {
      return {
        value: this.data?.feels_like?.day ? Math.round((this.data?.feels_like?.day + this.data?.feels_like?.night) /2 ) : Math.round(this.data?.feels_like),
        unit: ' °C',
        desc: 'Feels like'
      }
    },
    wind() {
      return {
        value: Number(this.data?.wind_speed.toFixed(1)),
        unit: ' m/s',
        desc: 'Wind',
      }
    },
    windGust() {
      return {
        value: this.data?.wind_gust ?  Number(this.data?.wind_gust.toFixed(1)) : 0,
        unit: ' m/s',
        desc: 'Wind Gust',
      }
    },
    windDeg() {
      return {
        value: this.data?.wind_deg ? this.data?.wind_deg : 0,
        unit: '°',
        desc: 'Wind Deg',
      }
    },
    humidity() {
      return {
        value: this.data?.humidity,
        unit: '%',
        desc: 'Humidity',
      }
    },
    pressure() {
      return {
        value: this.data?.pressure,
        unit: ' hPa',
        desc: 'Pressure',
      }
    },
  },
  methods: {
    // const feels_like = {'value', 'unit', 'description'};
  },
}
</script>

<style lang="scss" scoped>
.info-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 5px;
}
</style>