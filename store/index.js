export const state = () => ({
  currentWeather: null,
  todayWeather: null,
  dailyWeather: null,
});

export const mutations = {
  setCurrentWeather(state, data) {
    state.currentWeather = data;
  },
  // setTodayWeather(state, data) {
  //   state.dailyWeather[0] = data;
  // },
  setDailyWeather(state, data) {
    state.dailyWeather = data;
  },
};

export const actions = {
  async fetchWeatherData({ commit }) {
    try {
      const response = await this.$axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=40.58725980318928&lon=22.948223362612612&exclude=hourly,minutely&appid=11b0499bd13ab56063de7565a440eb97&units=metric');
      commit('setCurrentWeather', response.data.current);
      commit('setDailyWeather', response.data.daily);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },

};