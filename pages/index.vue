<template>
 <div class="indexContainer">
  <Top/>
  <!-- <TempDailyChart /> -->
 </div>
</template>

<script>
// import TempDailyChart from '~/components/TempDailyChart.vue';

export default {
    name: 'IndexPage',
    data() {
        return {
            test: null,
        };
    },
    async asyncData({ $axios, store }) {
        try {
            // Dispatch the fetchWeatherData action
            await store.dispatch('fetchWeatherData', { $axios });
            setInterval(async () => {
                await store.dispatch('fetchWeatherData', { $axios });
            }, 5 * 60 * 1000);
            // Other asyncData logic...
        }
        catch (error) {
            console.error('Error in asyncData:', error);
        }
    },
    // components: { TempDailyChart }
}
</script>
