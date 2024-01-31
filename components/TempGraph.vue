<template>
  <section class="chartContainer">
    <h3>Weekly Variation </h3>
      <LineChart :data="chartData" :options="chartOptions"/>
  </section>
</template>

<script>
import { convertTime } from '~/utils/indexUtils';
export default {
  data() {
        return {
           chartOptions: {
            scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Temperature',
              },
              ticks: {
                beginAtZero: true,
                stepSize: 5
              },
            },
          ],
        },
           },
           graphData:[],
        };
    },
    mounted() {
      this.graphData = this.$store?.state?.dailyWeather.slice(0, 7).map(d => ({
        date: this.convertTime(d.dt),
        maxTemp: Math.round(d?.temp?.max),
        value: d?.temp?.max
      }));
    },
  computed: {
    dailyWeather() {
      return this.$store?.state?.dailyWeather;
    },
    chartData() {
      return {
        labels: this.graphData.map(label => label.date),
        datasets: [
          {
            label: 'Max Temperature',
            scaleBeginAtZero : true,
            data: this.graphData.map(d => d.maxTemp),
            borderColor: "#4bcc96", 
            fill: false,
          }
        ],
      }
    },
  },
  methods: {
    convertTime,
  },
}
</script>
<style lang="scss" scoped>
  .chartContainer {
     background-color:#fdfdfd;
    padding: 10px 0;
    h3{
      margin-bottom: 10px;
      padding: 0 20px;
      
    }
  }
</style>