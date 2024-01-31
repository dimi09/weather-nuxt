<template>
  <div class="indexContainer">
    <Top />
    <TempGraph />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      test: null,
    };
  },

  async asyncData({ $axios, store }) {
    try {
      await store.dispatch("fetchWeatherData", { $axios });
      const now = new Date();
      const midnight = new Date(now);
      midnight.setHours(24, 0, 0, 0);
      const timeUntilMidnight = midnight - now;

      const intervalId = setInterval(async () => {
        try {
          await store.dispatch("fetchWeatherData", { $axios });
        } catch (error) {
          console.error("Error in setInterval callback:", error);
        }
      }, timeUntilMidnight);

      this.$data.intervalId = intervalId;
    } catch (error) {
      console.error("Error in asyncData:", error);
    }
  },
  beforeDestroy() {
    clearInterval(this.$data.intervalId);
  },
};
</script>
