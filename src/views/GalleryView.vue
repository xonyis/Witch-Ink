<script>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
import Gallery from '../components/GalleryComponent.vue'
import NavMenu from '../components/NavMenu.vue';

export default {
  name: 'gallery',
  components: {
    Nav,
    Gallery,
    Footer,
    NavMenu
  }
}
</script>
<template>
    <div>
        <NavMenu></NavMenu>
        <Gallery/>
        <Footer></Footer>
    </div>
</template>
