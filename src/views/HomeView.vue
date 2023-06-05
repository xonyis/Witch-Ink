<script>
import { ref } from 'vue';


import Nav from '../components/Nav.vue';
import Headers from '../components/HeaderComponent.vue'
import Reviews from '../components/ReviewsComponent.vue'
import Footer from '../components/Footer.vue';


export default {
  name: 'home',
  components: {
    Nav,
    Headers,
    Reviews,
    Footer,
  }
}
</script>

<template>
  <div class="app ">
    
    <Nav></Nav>
    
    <Headers></Headers>
    <Reviews></Reviews>
    
    <Footer></Footer>
    
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
