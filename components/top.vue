<template>
  <section class="container topSection">
    <div class="btn-area">
      <el-button class="nowBtn" @click="showCurrent">Now</el-button>
      <el-button class="todayBtn" @click="showToday">Today</el-button>
      <el-select class="ml10 selectDayBtn" placeholder="Select Day" @change="showDaily"  v-model="value">
        <el-option v-for="(item, i) in selectDayWeather" :key="i" :label="convertTime(item.dt)" :value="item.dt">
        </el-option>
      </el-select>
    </div>
    <div class="temperatureSection">
     <TempItemCurrent :data="currentWeather" v-show="nowActive" />
     <TempItem :data="todayWeather" v-show="todayActive" />
     <TempItem :data="selectedDay"  v-show="dailyActive" />
    </div> 
    <div class="infoSection">
      <Information :data="currentWeather" v-show="nowActive"/>
      <Information :data="todayWeather" v-show="todayActive"/>
      <Information :data="selectedDay"  v-show="dailyActive"/>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      nowActive: true,
      todayActive: false,
      dailyActive: false,
      value: null
    }
  },
  async asyncData({ store }) {
    await store.dispatch('fetchWeatherData');
  },
  mounted() {
  },
  computed: {
    currentWeather() {
      return this.$store.state.currentWeather;
    },
    todayWeather() {
      return this.$store?.state?.dailyWeather[0];
    },
    dailyWeather() {
      return this.$store?.state?.dailyWeather;
    },
    selectDayWeather() {
      return this.dailyWeather && this.dailyWeather?.length >= 7
        ? this.dailyWeather?.slice(1, 7)
        : this.dailyWeather;
    },
    selectedDay() {
      return this.value !==null? this.selectDayWeather.find(weatherItem => weatherItem.dt === this.value) : null
    },
    dateFormat() {
      return this.convertAndUseDate(this.currentWeather.dt)
    },
  },
  methods: {
    convertTime(timestamp) {
    const date = new Date(timestamp * 1000); 
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const formattedDate = `${day}/${month}`;
    
    return formattedDate;
  },
    showCurrent() {
      this.nowActive = true;
      this.todayActive = false;
      this.dailyActive = false;
    },
    showToday() {
      this.nowActive = false;
      this.todayActive = true;
      this.dailyActive = false;
    },
    showDaily() {
      this.nowActive = false;
      this.todayActive = false;
      this.dailyActive = true;
    },
  },
}
</script>

<style lang="scss">

.topSection {
  background-color:#fdfdfd;
  .btn-area {
    padding: 20px 20px;
  .selectDayBtn {
    max-width: 130px;
    width: 100%;
    .el-input__inner {
      padding: 0;
      text-align: center;
    }
    // .el-input__suffix {
    //   display: none;
    // }
  }
}
.temperatureSection {
  margin-top: 50px;
  padding: 0 20px;
}
.infoSection {
  border-top: 5px solid rgb(242, 242, 242);
  max-height: 2800px;
  height: 100%;
}
}
</style>