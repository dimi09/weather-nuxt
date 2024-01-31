<template>
  <section class="chartContainer">
    <h3>Weekly Variation </h3>
      <LineChart :data="chartData" :options="chartOptions"/>
      <!-- <p>{{arr}}</p> -->
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
                labelString: 'Temperature', // Label for the y-axis
              },
              ticks: {
                beginAtZero: true,
                stepSize: 5
              },
            },
          ],
        },
           },
           arr:[],
        };
    },
    mounted() {
      this.arr = this.$store?.state?.dailyWeather.map(d => ({
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
        // labels: ['30/1', '1/2', '2/2', '3/2', '4/2', '5/2'],
        labels: this.arr.map(label => label.date),
        datasets: [
          {
            label: 'Max Temperature',
            scaleBeginAtZero : true,
            data: this.arr.map(d => d.value),
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