<script>
import Toggle from './Toggle.vue';
export default {
    props: ["mode"],
    components: { Toggle }
}
</script>
<template>
    <header>
        <div class="header-warper">
            <div>
                <p><span class="sp-witch">Witch Ink Tattoo</span>
                <br>Salon de tatouage à Metz  </p>
            </div>
            <div  >
                <img class="main-photo" src="../assets/img/339172020_552967780040161_7814666685136169326_n.jpeg" alt="">
            </div>
        </div>
        <div class="presentation-warper">
            <div class="l-div">
                <img src="../assets/svg/logo-sorcière.svg" alt="">
            </div>
            <div class="r-div">
                <h3>Witch Ink Tatto</h3>
                <p>Bienvenue chez Witch Ink Tattoo, shop tattoo situé dans Metz centre.
                <br><br>
                fait un back ground img <br>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </header> 
</template>
<style>


.header-warper p{
    font-size: 3.5em;
    font-family: 'Ageya';
    line-height: 2em;
}

.sp-witch {
    font-size: 1.5em;
}

.header-warper {
    width: 100%;
    display: flex;
}

header div {
    /* border: 1px solid; */
    margin-top: 2em;
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

.presentation-warper {
    width: 100%;
    height: 70vh;
    text-align: center;
    font-family: var(--main-font);
    font-size: 2em;
    display: flex;
    padding: 3.5em 1em;
    /* background-image: url('../assets/img/presentation-bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; */
}

.l-div {
width: 40%;
display: flex;
justify-content: center;
align-items: center;
}

.l-div img{
    width: 80%;
    height: auto;
}

.r-div {
    width: 60%;
    display: flex;
    padding: 2em;
    flex-direction: column;
}

.r-div h3{
    border-bottom: 2px solid;
    line-height: .85;
    margin-bottom: 1em;
}

.r-div p{
    font-family: var(--sec-font);
    font-size: 0.7em;
    width: 100%;
    line-height: 2;
}

</style>