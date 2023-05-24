<script>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
import Gallery from '../components/GalleryComponent.vue'

export default {
  name: 'gallery',
  components: {
    Nav,
    Gallery,
    Footer
  }
}
</script>
<template>
    <div>
        <Nav></Nav>
        <Gallery/>
    </div>
</template>
