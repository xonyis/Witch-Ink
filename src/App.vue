<script>
import Nav from './components/Nav.vue';
import Headers from './components/HeaderComponent.vue'
import ButtonJN from './components/ButtonJN.vue'
import Prestation from './components/Prestation.vue'

export default {
  name: 'app',
  data () {
    return {
     mode: 'light'
    }
  },
  components: {
    Nav,
    Headers,
    ButtonJN,
    Prestation
  },

  methods: {
    toggle() {
      if (this.mode === "dark") {
        this.mode = ''
      } else {
        this.mode ='dark'
      }
    }
  }
}
</script>

<template>
  <div class="app " :class="(mode === 'dark' ? 'dark' : '')">
    
    <Nav></Nav>
    <Headers></Headers>
    <Prestation></Prestation>
    
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
