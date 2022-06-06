<template>
  <ChartVue />
</template>

<script>
import ChartVue from "./components/chart-vue.js";

export default {
  name: "App",
  components: {
    ChartVue,
  },
};
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
svg {
  border: 1px solid #000;
}
</style>
