<script>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
import Insta from '../components/InstagramTest.vue'

export default {
  name: 'contact',
  components: {
    Nav,
    Insta,
    Footer
  }
}
</script>
<template>
    <div>
        <Nav></Nav>
        <Insta/>
        <Footer></Footer>
    </div>
</template>
