import responseJson from '~/store/response.json'
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
      const response = responseJson
      // const response = await this.$axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=40.58725980318928&lon=22.948223362612612&exclude=hourly,minutely&appid=11b0499bd13ab56063de7565a440eb97&units=metric');
      commit('setCurrentWeather', response.data.current);
      commit('setDailyWeather', response.data.daily);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },

  convertTime({ commit }, timestamp) {
    const date = new Date(timestamp * 1000); 
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const formattedDate = `${day}/${month}`;
    
    return formattedDate;
  },
};