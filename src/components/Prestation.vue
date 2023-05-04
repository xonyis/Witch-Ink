<script>
import Toggle from './Toggle.vue';


export default {
    props: ["mode"],
    components: { Toggle }
}
</script>
<template>
    <div class="title-container">
        <h1><span class="underline">Nos Prestations</span></h1>
    </div>

    <div class="cards-warper">

        <div class="card-container">
            <div class="cards-img-1">
            </div>
            <h1>Tatouages</h1>
        </div>

        <div class="card-container">
            <div class="cards-img-2">
            </div>
            <h1>Flash</h1>
        </div>
    </div>

</template>
<style scoped>
.title-container {
    width: max-content; 
    height: auto;
    margin: auto;
    margin-bottom: 5em;
}
.title-container h1 {
    text-align: center;
    font-size: 50px;
    font-family: 'Ageya';

    list-style: none;
    line-height: 1;
}
.underline {
  border-bottom: 2px solid currentColor;
  display: inline-block;
  line-height: .85;
}

/*=== card === */

.cards-warper {
    width: 100%;
    height: max-content;
    padding: 2em;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
}
.card-container {
    /* background: #00000077; */
    height: 500px;
    width: 30%;
    padding: 1em;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: 'Ageya';

}

.cards-img-1 {
    background: url('../assets/img/img-presta_1-og.jpg');
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: contain;
    height: 100%;
    width: 100%;
}

.cards-img-2 {
    background: url('../assets/img/img-presta_2.jpg');
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: contain;
    height: 100%;
    width: 100%;
}

.card{
    background: #00000021;
    height: 80%;
    width: 100%;
}


</style>