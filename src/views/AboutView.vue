<script>
import Nav from '../components/Nav.vue';
import About from '../components/AboutComponent.vue'
import Footer from '../components/Footer.vue';
import Overlay from '../components/OverlayComponent.vue';
import NavMenu from '../components/NavMenu.vue';


export default {
  name: 'gallery',
  components: {
    Nav,
    About,
    Footer,
    NavMenu,
  }
}
</script>
<template>
    <div>
        <NavMenu></NavMenu>
        <About/>
        <Footer></Footer>
    </div>
</template>