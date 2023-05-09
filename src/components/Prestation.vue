<script lang="ts">
import Toggle from './Toggle.vue';
import { ref, computed } from 'vue';
import { useMouseInElement } from '@vueuse/core'

export default {
    props: ["mode"],
    components: { Toggle }
}
const target = ref(null)

const { x, y, isOutside, elementHeight, elementWidth } = useMouseInElement(target)

const cardTransform = computed(() => {
    const MAX_ROTATION = 6

    const rX = (
        (elementY.value / elementHeight.value) * MAX_ROTATION - MAX_ROTATION / 2
    ).toFixed(2)

    const rY = (
        (elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2
    ).toFixed(2)

    return isOutside.value ? '' : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotatey(${rY}deg)`

})



</script>
<template>
    <div class="main-warpper">
        <div class="title-container">
            <h1><span class="underline">Vous pouvez retrouver ci-dessous un aperçu des tatouages réalisés chez Witch Ink Tattoo</span></h1>
            
        </div>
        <p class="title-p">Vous pouvez retrouver ci-dessous un aperçu des tatouages réalisés chez Witch Ink Tattoo</p>
        <div class="grid-warpper">
            <div class="grid-1"><img src="../assets/img/gallery_01.jpeg" alt=""></div>
            <div class="grid-2"><img src="../assets/img/img-presta_2.jpg" alt=""></div>
            <div class="grid-3"><img src="../assets/img/gallery_07.jpeg" alt=""></div>
            <div class="grid-4"><img src="../assets/img/gallery_04.jpeg" alt=""></div>
            <div class="grid-5"><img src="../assets/img/gallery_03.jpeg" alt=""></div>
        </div>
    </div>
</template>
<style scoped>

.main-warpper {
    padding: 2em 0;
    display: flex;
    flex-direction: column;
}
.title-container {
    width: max-content; 
    height: auto;
    margin: auto;
    margin-bottom: 3.5em;
    text-align: center;
}
.title-container h1 {
    
    font-size: 2em;
    font-family: 'Ageya';

    list-style: none;
    line-height: 1;
}
.underline {
  border-bottom: 2px solid currentColor;
  display: inline-block;
  line-height: .85;
}

.title-p {
    font-family: var(--sec-font);
    font-size: 1.2em;
    margin-bottom: 2.5em;
    text-align: center;

}

/*=== grid === */

.grid-warpper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    width: 50%;
    height: 90vh;
    margin: auto;
}

.grid-warpper div {
    background: #000;
    display: flex;
    justify-content: center;

}

.grid-warpper img{
    /* display: none; */
    height: 100%;
    width: 100%;

}

.grid-1 { grid-area: 1 / 1 / 2 / 2; width: 110%;}
.grid-2 { grid-area: 1 / 2 / 2 / 3; width: 90%; margin-left: 10%; }
.grid-3 { grid-area: 2 / 1 / 3 / 3; height: 70vh;}
.grid-4 { grid-area: 3 / 1 / 4 / 2; }
.grid-5 { grid-area: 3 / 2 / 4 / 3; }

/* === hover === */


</style>