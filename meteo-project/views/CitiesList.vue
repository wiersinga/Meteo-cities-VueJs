<template>
  <div class="titleListCities">
    <h1>{{ msg }}</h1>
    <img src="https://www.rts.ch/2020/05/22/14/20/9390881.image?w=1200&h=630">
  </div>
  <div>
    <CityWeather
        name="Annecy"
        weather="Peu nuageux"
        :temperature="20.5"
        :updatedAt="new Date()"
    />
  </div>

</template>

<script>
import CityWeather from "@/components/CityWeather.vue";
export default {
  name: 'Météo - listes des villes',
  components: { CityWeather },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: rebeccapurple;
}

</style>