<script>
import { ref } from 'vue';

import Modal from '../components/OverlayComponent.vue'
export default {
    data() {
        return {
            elementX: 0,
            isOpen: false,
            screenSize: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        };
        
    },
    methods: {
        moveElement() {
            if (this.isOpen === false) {
                this.elementX -= this.screenSize.width; 
                this.isOpen = !this.isOpen;
            } else {
                this.elementX += this.screenSize.width; 
                this.isOpen = !this.isOpen;
            }
        }
    },
    components: {
      Modal,
    },
    setup() {
      const modalActive = ref(false);

      const toggleModal = () =>  {
        modalActive.value = !modalActive.value
      }
      return {modalActive, toggleModal};
    }
}
</script>
<template>
        <nav>
            <h1 class="shop-name-resp">Witch Ink Tattoo</h1>
            <div class="nav-container" :style="{ transform: `translateX(${elementX}px)` }" >
        <ul>
            <li class="nav-links"><a href="/">Accueil</a></li>
            <li class="nav-links"><a href="/gallery/">Galerie</a></li>
            <li class=" shop-name">Witch Ink Tattoo</li>
            <li class="nav-links"><a href="/about/">A propos</a></li>
            <li class="nav-links"><a @click="toggleModal">Contact</a></li>

        </ul>
    </div>
    <transition name="fade" mode="out-in">
        <span @click="moveElement" v-if="!isOpen"><font-awesome-icon class="fa-icon" :icon="['fas', 'bars']" /></span>
        <span @click="moveElement" v-else><font-awesome-icon class="fa-icon" :icon="['fas', 'x']" /></span>
    </transition>
    <Modal @close="toggleModal" :modalActive="modalActive">
  </Modal>
        </nav>
</template>
<style scoped>
nav {
    height: 10vh;
    width: 100%;
}

.nav-container {
    padding: 2em;
}

ul {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-around;
    list-style: none;
    align-items: center;
    font-family: var(--main-font);
}

ul li ,a {
    color: var(--black);
    font-size: 1.5em;
    font-weight: 500;
    text-decoration: none;
}

.nav-links a:hover {
color: var(--black-soft);
}

.nav-links a::before {
content: "";
position: absolute;
display: block;
width: 100%;
height: 1.15px;
bottom: 0;
left: 0;
background-color: var(--black-soft);
transform: scaleX(0);
transition: transform 0.4s ease;
}

.nav-links a {
position: relative;
color: var(--black-soft);
text-decoration: none;
}
.nav-links a:hover::before {
transform: scaleX(1);
}

.nav-links {
    font-size: 25px;
}

.shop-name {
    cursor: default;
    font-size: 50px;
}

.shop-name-resp {
    display: none;
}
.fa-icon {
    display: none;
    font-size: 1.5em;
    width: 1em;
    transition: all ease 5s;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity ease-in-out 1.5s;
}



.fade-enter, .fade-leave-to {
    opacity: 0;
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
    .nav-links {
    font-size: 15px;
    }

.shop-name {
    font-size: 35px;
}
}

@media screen and (max-width: 768px) {
    
    .nav-container {
        position: absolute;
        background: #cecece48;
        backdrop-filter: blur(5px);
        width: 100%;
        height: 100vh;
        padding: 5em 2em;
        margin-left: 100vw;
        transition: all ease 2s;
    }
    .shop-name {
        display: none;
    }

    a{
        font-weight: 800;
    }
    
    ul{
        flex-direction: column;
    }
    /* li {
        border: 1px solid;
        padding: 5px 15px;
        border-radius: 10px;
    } */
    .fa-icon {
        display: block;
        position: absolute;
        top: 3vh;
        right: 7vw;
        font-size: 2em;
    }

    .shop-name-resp {
        display: block;
        position: absolute;
        top: 3vh;
        left: 7vw;
        font-weight: 800;
        font-size: 1.5em;
        line-height: 1em;
    }
}

</style>