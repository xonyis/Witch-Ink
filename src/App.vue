<script>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="app ">
    <router-view></router-view>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  width: 100vw;
  height: max-content;
  background: var(--white-soft);
  transition: 0.7s ease-in-out;
}

.dark {
  background-color: var(--black-soft);
  color: var(--white-soft);
}

</style>
