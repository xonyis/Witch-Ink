<script>
import Toggle from './Toggle.vue';
export default {
    props: ["mode"],
    components: { Toggle }
}

</script>

<template>
    <nav>
        <!-- <h1>Mode : {{ mode }}</h1> -->
        <!-- toogle -->
       <!-- <div class="nav-link">Accueil</div>
       <div class="nav-link">Gallerie</div>
       <h1>Witch Ink Tatoo</h1>
       <div class="nav-link">A propos</div>
       <div class="nav-link">Contact</div>
       <Toggle :mode="mode" @toggle="$emit('toggle')"/> -->
       <ul>
        <li class="nav-links"><a href="">Accueil</a></li>
        <li class="nav-links"><a href="">Gallerie</a></li>
        <li class="nav-links shop-name"><a href="#">Witch Ink Tattoo</a></li>
        <li class="nav-links"><a href="">A propos</a></li>
        <li class="nav-links"><a href="">Contact</a></li>
       </ul>
    </nav>

</template>


<style scoped>
nav {
    overflow: auto;
}

nav ul{
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    padding: 0px 25px;
    height: 4em;
    width: 100%;
    text-transform: uppercase;
    font-weight: 900 ;
    font-family: 'Ageya';
    list-style: none;
}
a{
    text-decoration: none;
    color: var(--black-soft);
}

.dark a {
    color: var(--white-soft);
}

.nav-links {
    list-style: none;
    font-size: 25px;
}

.shop-name a{
    font-size: 50px;
    cursor: default;
}

.tgl-btn{
    position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
}


</style>