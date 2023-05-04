<script>
import Toggle from './Toggle.vue';
export default {
    props: ["mode"],
    components: { Toggle }
}
</script>
<template>
    <header>
        <div>
            <p><span class="sp-witch">Witch Ink Tattoo</span>
           <br>Salon de tatouage à Metz  </p>
        </div>
        <div  >
            <img class="main-photo" src="../assets/img/339172020_552967780040161_7814666685136169326_n.jpeg" alt="">
        </div>
    </header>
</template>
<style>
p{
    font-size: 3.5em;
    font-family: 'Ageya';
    line-height: 2em;
}

.sp-witch {
    font-size: 1.5em;
}

header {
    display: flex;
}

header div {
    /* border: 1px solid; */
    margin-top: 5em;
    margin-bottom: 5em;

    height: auto;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-photo {
    height: auto;
    width: 80%;
    border-radius: 50%;
}

</style>