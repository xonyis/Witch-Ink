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
            <p>Salon de tatouage à Metz 
           <br> <span class="sp-witch">Witch Ink Tattoo</span></p>
        </div>
        <div>
            <img src="../assets/339172020_552967780040161_7814666685136169326_n.jpeg" alt="">
            

        </div>
    </header>
    <div id="mybutton">
        <Toggle :mode="mode" @toggle="$emit('toggle')" class="tgl-btn"/>
    </div>
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
    width: 100%;
    height: 95vh;
    padding: 2em;
    display: flex;
}

header div {
    /* border: 1px solid; */
    height: 95vh;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    height: 30em;
    width: 30em;
    border-radius: 50%;
}

.tgl-btn{
    position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
}

#mybutton {
  position: fixed;
  bottom: 10px;
  right: 10px;
}

</style>