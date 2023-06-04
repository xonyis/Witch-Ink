

<template>
    <nav>
       <ul>
        <li class="nav-links"><a href="/">Accueil</a></li>
        <li class="nav-links"><a href="/gallery/">Galerie</a></li>
        <li class="shop-name">Witch Ink Tattoo</li>
        <li class="nav-links"><a href="/about/">A propos</a></li>
        <li class="nav-links"><button @click="overlay = !overlay">Contact</button></li>
       </ul>
    </nav>
    <div id="overlay" v-if="overlay">
      <button @click="overlay = !overlay"><font-awesome-icon icon="fa-solid fa-x" style="color: #f8f8f8;" /></button>
    </div>
    <div v-else>
      
    </div>

</template>

<script>
export default {
  data() {
  	return {
	    overlay: true
  	}
	}
}
</script>

<style scoped>


#overlay {
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.678);
  z-index: 2;
  cursor: pointer;
}

#overlay button {
  background: none;
  border: none;
  font-size: 2em;
  float: right;
  margin-right: 2vw;
  margin-top: 2vh;
}

nav ul{
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    padding: 0px 25px;
    height: 5em;
    width: 100%;
    text-transform: uppercase;
    font-weight: 900 ;
    font-family: 'Ageya';
    list-style: none;
}
.shop-name {
    font-size: 50px;
    cursor: default;
    
}

.nav-links {
    list-style: none;
    font-size: 25px;
}
.nav-links a{
    text-decoration: none;
    color: var(--black-soft);
}

.nav-links button {
  background: none;
  border: none;
  font-family: var(--main-font);
  color: var(--black-soft);
  font-size: 30px;
  height: max-content;
}

a {
  position: relative;
  color: var(--black-soft);
  text-decoration: none;
}

a:hover {
  color: var(--black-soft);
}

a::before {
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

a:hover::before {
  transform: scaleX(1);
}

.nav-links button::before {
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

.nav-links button:hover::before {
  transform: scaleX(1);
}

.dark a {
    color: var(--white-soft);
}

.dark a::before {

  background-color: var(--white-soft);

}


@media screen and (min-width: 760px) and (max-width: 950px) {
  .nav-links {
    font-size: 20px;
  }
  .shop-name {
    font-size: 40px;
  }
}

@media screen and (min-width: 420px) and (max-width: 759px) {
  .nav-links {
    font-size: 10px;
  }
  .shop-name {
    font-size: 30px;
  }
}
</style>