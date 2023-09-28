<template>
  <div>
    <router-link to="/">Accueil</router-link>
    <router-link to="/CitiesList">Villes</router-link>
  <router-link to="/CityWeather">Ville</router-link>
  </div>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
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
}
</style>
