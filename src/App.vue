<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <!-- <Calendar/> -->
        <router-view/>
    </div>
</template>

<script>
import Calendar from "./components/Calender";
export default {
    name: "App",
    components: {
        Calendar
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    /* margin-top: 60px; */
}
</style>
