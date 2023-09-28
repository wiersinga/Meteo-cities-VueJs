// src/router.js

import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from "@/components/HelloWorld.vue";
import CitiesList from "../../views/CitiesList.vue";
import CityWeather from "@/components/CityWeather.vue";

const routes = [
    {
        path:"/",
        name:"Home",
        component: HelloWorld,
    },
    {
        path: "/CitiesList",
        name:"ListCities",
        component: CitiesList
    },
    {
        path:"/ville",
        name:"cityWeather",
        component: CityWeather
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
