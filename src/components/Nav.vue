<script>
import Toggle from './Toggle.vue';
export default {
    props: ["mode"],
    components: { Toggle }
}

</script>

<template>
    <nav>
        <h1>Mode : {{ mode }}</h1>
        <!-- toogle -->
       <div class="nav-link">Accueil</div>
       <div class="nav-link">Gallerie</div>
       <div class="nav-link">A propos</div>
       <div class="nav-link">Contact</div>
       <Toggle :mode="mode" @toggle="$emit('toggle')"/>

    </nav>
</template>


<style scoped>
nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0px 25px;
    height: 4em;

}

nav h1 {
    font-size: 32px;
    text-transform: uppercase;
    font-weight: 900 ;
}
</style>