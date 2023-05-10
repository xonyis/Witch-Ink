<script>
import Toggle from './Toggle.vue';
import { vScrollReveal } from 'vue-scroll-reveal';
import { ref, computed } from 'vue';


export default {
    props: ["mode"],
    components: { Toggle }
}


</script>
<template>
        <div class="intro-container">
            <p>vous souhaiter vous faire tatouer ?</p>

        </div>
        <div class="layout-container">
            <div class="grid-container">
                <div class="grid-warpper">
                    <div class="grid-1" ><img src="../assets/img/gallery_01.jpeg" alt=""></div>
                    <div class="grid-2"><img src="../assets/img/img-presta_2.jpg" alt=""></div>
                    <div class="grid-3"><img src="../assets/img/gallery_03.jpeg" alt=""></div>
                    <div class="grid-4"><img src="../assets/img/gallery_04.jpeg" alt=""></div>
                </div>
            </div>
            
            <div class="text-container">
                <h3>Be Unique</h3>
                <p>Nous souhaitons aider les gens à prendre confiance en eux, à se révéler et à affirmer leur identité. Pour nous, le tatouage est comme une thérapie vers l’émancipation et l’appropriation de son corps. C'est pourquoi nous tatouons tous types de peaux et nous les représentons tels qu’elles sont, car chaque corps est beau tel qu’il est.</p>
            </div>
        </div>
</template>
<style scoped>

.intro-container {
    width: 100%;
    text-align: center;    
}

.intro-container p {
    font-family: var(--main-font);
    font-weight: 500;
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 1.2px;
}

/* === LAYOUT === */

.layout-container {
    padding: 5em;
    display: flex;
    justify-content: space-around;
}

.grid-container {
    float: right;
}

.text-container {
    text-align: center;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.text-container h3 {
    font-family: var(--main-font);
    font-size: 2.5em;
    font-weight: 500;
    margin-bottom: 1.5em;
}

.text-container p {
    font-size: 1.2em;
}

/*=== grid === */

.grid-warpper {
    display: grid;
    grid-template-columns: 20vw 20vw ;
    grid-template-rows: 40vh 35vh;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    width: 50%;
    height: max-content;

}

.grid-warpper div {
    background: #000;
    display: flex;
    justify-content: center;
    border-radius: 10px;
}

.grid-warpper img{
    /* display: none; */
    height: 100%;
    width: 100%;
    border-radius: 10px;
}

.grid-1 { grid-area: 1 / 1 / 2 / 2; }
.grid-2 { grid-area: 1 / 2 / 2 / 3; }
.grid-3 { grid-area: 2 / 1 / 3 / 2;}
.grid-4 { grid-area: 2 / 2 / 3 / 3; }


/* === hover === */


</style>