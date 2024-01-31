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
      setInterval(async () => {
        await store.dispatch("fetchWeatherData", { $axios });
      }, 60 * 60 * 1000);
    } catch (error) {
      console.error("Error in asyncData:", error);
    }
  },
};
</script>
