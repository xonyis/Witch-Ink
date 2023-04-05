<script>
import Nav from './components/Nav.vue';
import Headers from './components/HeaderComponent.vue'

export default {
  name: 'app',
  data () {
    return {
     mode: 'light'
    }
  },
  components: {
    Nav,
    Headers
  },

  methods: {
    toggle () {
      if (this.mode === "dark") {
        this.mode = 'light'
      } else {
        this.mode ='dark'
      }
    }
  }
}
</script>

<template>
  <div class="app" :class="(mode === 'dark' ? 'dark' : '')">
    <Nav :mode="mode" @toggle="toggle"></Nav>
    <Headers></Headers>
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
  height: 100vh;
  background: var(--white-soft);
  transition: background 0.7s ease-in-out;
}

.dark {
  background: var(--black-soft);
  color: var(--white-soft);
}

</style>
