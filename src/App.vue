<script>
import Nav from './components/Nav.vue';
import Headers from './components/HeaderComponent.vue'
import Reviews from './components/ReviewsComponent.vue'
import Footer from './components/Footer.vue';


export default {
  name: 'app',
  components: {
    Nav,
    Headers,
    Reviews,
    Footer,
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ]
    }
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
