<template>
  <div class="links">
    <router-link to="/" class="Home-link">Accueil</router-link>
    <router-link to="/CitiesList" class="Cities-link">Villes</router-link>
    <router-link to="/CityWeather" class="City-link">Ville</router-link>
  </div>
  <img alt="Meteo logo" src="https://upload.wikimedia.org/wikipedia/fr/thumb/4/47/Logo_M%C3%A9t%C3%A9o_France_2016.svg/768px-Logo_M%C3%A9t%C3%A9o_France_2016.svg.png" width="100" height="100">
  <HelloWorld msg="Météo d'Aujourd'hui ?"/>
  <button @click="onListClick">click here!</button>

<!--  <CitiesList msg="Météo - Liste des Villes"/>-->
  <router-view></router-view>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld

  },
  methods:{
    onListClick(){
      alert("user clicked on this button")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .links{
    display: flex;
    justify-content: space-around;
    padding-bottom: 50px;
  }
}
</style>
