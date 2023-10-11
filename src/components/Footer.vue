<script >
import { ref } from 'vue';

import Modal from '../components/OverlayComponent.vue'

export default {
  
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
    <div class="main-warper">     
        <div class="left-warper" >
            <div class="info-warper">
                <img src="../assets/svg/logo-sorcière.svg" alt="">
                <h3>Witch Ink Tattoo</h3>
                <a href="">Mention Légales</a>
            </div>
            
           
        </div>
        <div class="social-container">
                <div class="social-btn">
                    <a arget="_blank" href="https://www.instagram.com/witch.inktattoo/" class="social-icon"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                </div>
                <div class="social-btn">
                    <a target="_blank" href="https://www.tiktok.com/@witch.ink.tattoo" class="social-icon"><font-awesome-icon icon="fa-brands fa-tiktok" /></a>
                </div>
            </div>
        <div class="menu-warper">
            <ul>
                <li class="foot-links"><a href="/">Accueil</a></li>
                <li class="foot-links"><a href="/gallery">Gallerie</a></li>
                <li class="foot-links"><a href="/about">A propos</a></li>
                <li class="foot-links"><button @click="toggleModal">Contact</button></li>
            </ul>
        </div>
        <div class="mid-warper">
            <h3>à Propos de nous</h3>
            <p>Witch Ink Tattoo, situé au centre de Metz, est un salon de tatouage qui sort de l'ordinaire. <br> Tristan, tatoueur dédié à créer des œuvres créatives, uniques et significatives.</p>
        </div>
    </div>
    <Modal @close="toggleModal" :modalActive="modalActive">
    </Modal>
</template>
<style scoped>
.main-warper {
    width: 100%;
    height: 40vh;
    margin-top: -7px;
    background: var(--black-soft);
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    color: var(--white-soft);
    font-size: 15px;
}

.main-warper div h3{
    display: flex;
    align-items: center;
}

.left-warper {
    width: 45%;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 5vh;
}

.info-warper img{
    width: 100%;
    height: max-content;
}

.info-warper h3{
    font-family: var(--main-font);
    font-size: 2em;
}

.info-warper p{
    font-family: var(--pop-font);
    font-size: .7em;
    margin-top: 10%;
}

.info-warper a{
    font-family: var(--pop-font);
    font-size: .6em;
    color: var(--white-soft);
}

.social-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 2em;
}

.social-btn {
    border: 1px solid rgba(131, 131, 131, 0.521);
    height: 4em;
    width: 4em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all ease .5s;
}

.social-btn:hover {
    transform: scale(1.1);
}

.social-icon {
    color: var(--white-soft);
    font-size: 2em;
}

.menu-warper {
    display: flex;
    height: 80%;
    margin-top: 2vh;
    align-items: center;
}

.menu-warper ul{
    width: fit-content;
    height: 47%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.menu-warper li{
    list-style: none;
    text-align: center;
}

.menu-warper a {
    text-decoration: none;
    color: var(--white-soft);
    font-size: 2em;
    font-family: var(--main-font);
}

.menu-warper button {
  background: none;
  border: none;
  font-family: var(--main-font);
  color: var(--white-soft);
  font-size: 30px;
  height: max-content;
}



.menu-warper a::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: var(--white-soft);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.menu-warper a:hover::before {
  transform: scaleX(1);
}

.menu-warper button::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: var(--white-soft);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.menu-warper button:hover::before {
  transform: scaleX(1);
}




.mid-warper {
    width: 30%;
    margin-top: 10vh;
    height: 80%;
    height: max-content;
}

.mid-warper h3 {
    font-family: var(--main-font);
    font-size: 1.7em;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 1em;
}

.mid-warper p{
    font-family: var(--pop-font);
    width: 100%;
}

@media screen and (max-width: 1024px){
    .main-warper {
        font-size: 0.7em;
    }
    .menu-warper button {
        font-size: 2em;
    }

    .mid-warper {
        margin-top: 5vh;
    }

    .left-warper {
        margin-top: 0;
    }
}

@media screen and (max-width: 768px){
    .main-warper {
        font-size: 0.7em;
        height: 35vh;
        justify-content: center;
        gap: 10px;
    }

    .social-container {
        height: 75%;
        margin-top: 2.5vh;
    }

    .mid-warper {
        width: 45%;
    }

    .menu-warper {
        position: absolute;
        width: 100%;
        height: 5vh;
        margin-top: 30vh;
    }

    .menu-warper ul {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
}

</style>