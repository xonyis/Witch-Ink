<script>
import Nav from '../components/Nav.vue';
import About from '../components/AboutComponent.vue'
import Footer from '../components/Footer.vue';

export default {
  name: 'gallery',
  components: {
    Nav,
    About,
    Footer
  }
}
</script>
<template>
    <div>
        <Nav></Nav>
        <About/>
        <Footer></Footer>
    </div>
</template>