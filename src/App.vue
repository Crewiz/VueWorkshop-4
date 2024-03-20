<template>
  <div id="app">
    <HeaderComponent />
    <router-view />
  </div>
</template>

<script lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
  },
};
</script>

<style>
</style>
