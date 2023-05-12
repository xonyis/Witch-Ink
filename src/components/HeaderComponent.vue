<script>

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
    </header> 
        <div class="presentation-warper">
            
            <h3>Bienvenue chez Witch Ink Tattoo</h3>
            <p class="pre-text">Le salon Witch Ink Tattoo est l'endroit idéal pour les amateurs de tatouage qui cherchent à ajouter une touche personnelle et créative à leur style.</p>
            <div class="values-warper-1">
                <div class="text-container">
                    <h5>Nous mettons l'accent sur <br> la qualité et l'écoute.</h5>
                    <p>Chez Witch Ink Tattoo, nous sommes fiers de fournir un service personnalisé et attentionné à chaque client, en écoutant attentivement leurs idées et en travaillant avec eux pour créer une œuvre d'art qui correspond à leurs souhaits et leur personnalité. </p>
                </div>
                <div class="img-warper-1">
                    <div class="img-container-1">
                    <img src="../assets/img/img-presta_1.jpg" alt="">
                    </div>
                </div>
                
                <!-- <p>Chez Witch Ink Tattoo, nous sommes fiers de fournir un service personnalisé et attentionné à chaque client, en écoutant attentivement leurs idées et en travaillant avec eux pour créer une œuvre d'art qui correspond à leurs souhaits et leur personnalité. </p>
                <p> Utilisant les dernières techniques et les équipements les plus modernes, Tristan travaille avec soin et précision pour créer des tatouages exceptionnels qui reflètent la personnalité et les souhaits de chaque client. </p> -->
            </div>
            <div class="values-warper-2">
                <div class="img-warper-2">
                    <div class="img-container-2">
                    <img src="../assets/img/img-presta_2.jpg" alt="">
                    </div>
                </div>
                <div class="text-container">
                    <h5>Tatouages personnalisés <br> de haute précision</h5>
                    <p> Utilisant les dernières techniques et les équipements les plus modernes, Tristan travaille avec soin et précision pour créer des tatouages exceptionnels qui reflètent la personnalité et les souhaits de chaque client. </p>                </div>
                <!-- <p>Chez Witch Ink Tattoo, nous sommes fiers de fournir un service personnalisé et attentionné à chaque client, en écoutant attentivement leurs idées et en travaillant avec eux pour créer une œuvre d'art qui correspond à leurs souhaits et leur personnalité. </p>
                <p> Utilisant les dernières techniques et les équipements les plus modernes, Tristan travaille avec soin et précision pour créer des tatouages exceptionnels qui reflètent la personnalité et les souhaits de chaque client. </p> -->
            </div>
        </div>
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
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10vh;
    background: var(--black);
    padding-top: 10vh;
}

.presentation-warper h3 {
    width: 100%;
    line-height: 3em;
    font-size: 3em;
    font-family: var(--main-font);
    color: var(--white-soft);
    text-align: center;
}

.pre-text {
    width: 100%;
    line-height: 3em;
    letter-spacing: 1.2px;
    width: 50%;
    font-size: 1.5em;
    font-family: var(--sec-font);
    color: var(--white-soft);
    text-align: center;
}

.values-warper-1 {
    width: 100%;
    height: max-content;
    background: url(../assets/svg/Frame-4.svg);
    padding: 10vh;
    display: flex;
    align-items: end;
    justify-content: space-evenly;
    margin-bottom: 15vh;
}

.img-warper-1 {
    z-index: 2;
   width: 450px; 
   --coner-color: rgb(97, 97, 97);
   height: 550px; 
    display: flex;
    justify-content: center;
    align-items: center;
    background:
        linear-gradient(to right, var(--coner-color) 1px, transparent 1px) 0 0,
        linear-gradient(to right, var(--coner-color) 1px, transparent 1px) 0 100%,
        linear-gradient(to left, var(--coner-color) 1px, transparent 1px) 100% 0,
        linear-gradient(to left, var(--coner-color) 1px, transparent 1px) 100% 100%,
        linear-gradient(to bottom, var(--coner-color) 1px, transparent 1px) 0 0,
        linear-gradient(to bottom, var(--coner-color) 1px, transparent 1px) 100% 0,
        linear-gradient(to top, var(--coner-color) 1px, transparent 1px) 0 100%,
        linear-gradient(to top, var(--coner-color) 1px, transparent 1px) 100% 100%;
  background-repeat: no-repeat;
  background-size: 40px 40px;
      
      
}

.img-container-1 {
    width: max-content;
}

.img-container-1 img {
    width: 25em;
    height: auto;
    border-radius: 5%;
}

.text-container {
    color: var(--white-soft);
}
.text-container h5{
    font-size: 2em;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 1em;
    font-family: var(--sec-font);
}

.text-container p {
    font-size: 1.2em;
    width: 550px;
    font-weight: 250;
    font-family: var(--pop-font);
    
}

/* ===================================== */

.values-warper-2 {
    width: 100%;
    height: max-content;
    background: url(../assets/svg/Frame-5.svg);
    padding: 10vh;
    display: flex;
    align-items: end;
    justify-content: center;
}

.img-warper-2 {
    z-index: 2;
   width: 450px; 
   --coner-color: rgb(97, 97, 97);
   height: 550px; 
   margin-right: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background:
        linear-gradient(to right, var(--coner-color) 1px, transparent 1px) 0 0,
        linear-gradient(to right, var(--coner-color) 1px, transparent 1px) 0 100%,
        linear-gradient(to left, var(--coner-color) 1px, transparent 1px) 100% 0,
        linear-gradient(to left, var(--coner-color) 1px, transparent 1px) 100% 100%,
        linear-gradient(to bottom, var(--coner-color) 1px, transparent 1px) 0 0,
        linear-gradient(to bottom, var(--coner-color) 1px, transparent 1px) 100% 0,
        linear-gradient(to top, var(--coner-color) 1px, transparent 1px) 0 100%,
        linear-gradient(to top, var(--coner-color) 1px, transparent 1px) 100% 100%;
  background-repeat: no-repeat;
  background-size: 40px 40px;
      
      
}

.img-container-2 {
    width: max-content;
}

.img-container-2 img {
    width: 25em;
    height: auto;
    border-radius: 5%;
}

</style>