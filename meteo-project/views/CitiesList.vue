<template>
  <div class="titleListCities">
    <h1>{{ msg }}</h1>
<!--    <img src="https://www.rts.ch/2020/05/22/14/20/9390881.image?w=1200&h=630">-->
  </div>
  <div v-for="city in cities" v-bind:key="city.id">
    <CityWeather
        :name=city.name
        :weather=city.weather
        :temperature=city.temperature
        :updatedAt=city.updatedAt
    />
  </div>
</template>

<script>
import CityWeather from "@/components/CityWeather.vue";
import { TimeAgo  } from 'timeago.js';
export default {
  name: 'Météo - listes des villes',
  components: { CityWeather },
  props: {
    msg: String
  },
  data(){
    return {
      cities: [
        {
          id:1,
          name:"Annemasse",
          weather:'Ensoleillé',
          temperature:19.5,
          updatedAt:new Date()
        },
        {
          id:2,
          name:"Lyon",
          weather:'Ensoleillé',
          temperature:18.5,
          updatedAt:new Date()
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: rebeccapurple;
}

</style>