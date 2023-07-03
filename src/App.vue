<template>
  <NavBar :pages="pages" :active-page="activePage" :nav-link-click="(index) => activePage = index"
    :search-click="searchClick"></NavBar>
  <Section
  :temp="temperature"
  :humidity="humidity"
  :cloud_pct="cloud_pct"
  :feels_like="feels_like"
  :max_temp="max_temp"
  :min_temp="min_temp"
  :sunrise="sunrise"
  :sunset="sunset"
  :wind_deg="wind_deg"
  :wind_speed="wind_speed"
  >
  </Section>
</template>

<script>
import './assets/styles/style.css';
import { defineAsyncComponent } from 'vue';
// import Section from './components/Section.vue';
import NavBar from './components/NavBar.vue';
import axios from 'axios';

const Section = defineAsyncComponent(()=> import('./components/Section.vue'))

export default {
  components: {
    NavBar,
    Section
  },
  data() {
    return {
      activePage: 0,
      pages: [{
        link: { title: "Temperature", url: "temperature" }
      },
      { link: { title: "Humidity", url: "humidity" } },
      { link: { title: "Wind", url: "wind" } },
      { link: { title: "Weather App", url: "" } },
      ],
      cloud_pct: '',
      temperature: '',
      feels_like: '',
      humidity: '',
      max_temp: '',
      min_temp: '',
      wind_speed: '',
      sunrise: '',
      sunset: '',

    }
  },
  methods: {
    async searchClick(searchtext) {
      const options = {
        method: 'GET',
        url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
        params: { city: searchtext },
        headers: {
          'X-RapidAPI-Key': 'e9b74ad52emsh3e4a8d7b89386b9p11a670jsn2ab734e9e1b6',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        if (searchtext != null || searchtext != ''){
        this.temperature = response.data.temp;
        this.cloud_pct = response.data.cloud_pct;
        this.feels_like = response.data.feels_like;
        this.humidity = response.data.feels_like;
        this.max_temp = response.data.max_temp;
        this.min_temp = response.data.min_temp;
        this.wind_speed = response.data.wind_speed;
        this.sunrise = response.data.sunrise;
        this.sunset = response.data.sunset;}
      }
      catch (error) {
        console.log(error);
      }

    }
  },
mounted(){
}
}

</script>
