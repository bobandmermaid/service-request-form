<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1440px;
  box-sizing: border-box;
  color: #2c3e50;
  margin: 0 auto;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
