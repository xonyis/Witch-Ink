<script>

</script>
<template>
    <header>
        <div class="header-warper">
            <div class="header-l">
                <p><span class="sp-witch">Witch Ink Tattoo</span>
                <br>Salon de tatouage à Metz  </p>
            </div>
            <div class="header-r" >
                <img class="main-photo" src="../assets/img/339172020_552967780040161_7814666685136169326_n.jpeg" alt="">
            </div>
        </div>
    </header> 
        <div class="svg-container">
        <img class="svg-top-pre" src="../assets/svg/top-prensentation.svg" alt="">
    </div>
        <div class="presentation-warper">
            
            <h3>Bienvenue chez Witch Ink Tattoo</h3>
            <p class="pre-text">Le salon Witch Ink Tattoo est l'endroit idéal pour les amateurs de tatouage qui cherchent à ajouter une touche personnelle et créative à leur style.</p>
            <div class="values-warper-1">
                <div class="text-container">
                    <h5>Tatouages personnalisés <br> de haute précision</h5>
                    <p> Utilisant les dernières techniques et les équipements les plus modernes, Tristan travaille avec soin et précision pour créer des tatouages exceptionnels qui reflètent la personnalité et les souhaits de chaque client. </p>
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
                    <h5>Nous mettons l'accent sur <br> la qualité et l'écoute.</h5>
                    <p>Chez Witch Ink Tattoo, nous sommes fiers de fournir un service personnalisé et attentionné à chaque client, en écoutant attentivement leurs idées et en travaillant avec eux pour créer une œuvre d'art qui correspond à leurs souhaits et leur personnalité. </p>
                    <!-- <p>Chez Witch Ink Tattoo, nous sommes fiers de fournir un service personnalisé et attentionné à chaque client, en écoutant attentivement leurs idées et en travaillant avec eux pour créer une œuvre d'art qui correspond à leurs souhaits et leur personnalité. </p>
                <p> Utilisant les dernières techniques et les équipements les plus modernes, Tristan travaille avec soin et précision pour créer des tatouages exceptionnels qui reflètent la personnalité et les souhaits de chaque client. </p> -->
                    <a href="/gallery" class="btn-gallerie">Voir la Gallerie</a>
                </div>
            </div>
        </div>
        <div class="svg-container">
        <img class="svg-bot-pre" src="../assets/svg/top-prensentation.svg" alt="">
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

.svg-container {
    overflow: hidden;
}

.svg-top-pre {
    margin-top: 11vh;
    margin-bottom: -20vh;
    overflow: hidden;
}

.svg-bot-pre {
    transform: rotate(180deg);
    overflow: hidden;
}

.presentation-warper {
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--black);
    padding-bottom: 10vh;

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
   width: max-content;
   padding: 2em;
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
    width: 25vw;
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
    width: 80%;
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
    width: max-content;
    padding: 2em; 
    height: max-content;
   --coner-color: rgb(97, 97, 97);
   height: auto; 
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
  background-size: 50px 50px;
      
      
}

.img-container-2 {
    width: max-content;
}

.img-container-2 img {
    max-width: 35vw;
    height: auto;
    border-radius: 5%;
}

.btn-gallerie {
    position: absolute;
    margin-top: 1.5em;
    background: #f2f2f2;
    padding: .7em 1em ;
    font-size: 1.5em;
    letter-spacing: 1.2px;
    color: var(--black-mute);
    font-family: var(--main-font);
    font-weight: 600;
    text-decoration: none;
    border-radius: 5px;
    text-transform: uppercase;
    transition: all ease .5s;
}

.btn-gallerie:hover {
    transform: scale(1.1);
}

/* HEADER */
@media screen and (min-width: 1000px) and (max-width: 1180px) {
    .header-warper p{
    font-size: 2.8em;  
}
}
@media screen and (min-width: 768px) and (max-width: 1000px) {
    .header-warper p{
    font-size: 2.3em;  
}
}

@media screen and (max-width: 768px) {
    .header-warper p{
    font-size: 2em;  
    width: 100%;
    }
    .header-l {
        width: 100%;
        text-align: center;
    }
    .header-warper {
        flex-direction: column;
    }
    .main-photo {
        width: 60vw;
        margin-top: 5vh;
    }

    .presentation-warper h3 {
        font-size: 2em;
        width: 100%;
    }

    .pre-text {
        width: 85%;
        line-height: 1.7em;
        letter-spacing: 2px;
    }

    .text-container p {
        width: 100%;
        
    }

    .values-warper-1 {
        flex-direction: column-reverse;
        align-items: center;
        justify-content: space-around;
        padding: 10vh 10vw;
        height: 125vh;
        margin-bottom: 0;
    }

    .values-warper-2 {
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 5vh 10vw;
        height: 125vh;
        margin-bottom: 0;
    }

    .img-container-1 img {
        width: 60vw;
    }

    .img-warper-2 {
        margin-right: 0;
        width: 100;
    }

    .img-container-2 img {
        max-width: 70vw;
    }
}


/* PRESENTATION */

@media screen and (min-width: 490px) and (max-width: 1024px) {
    .values-warper-1 {
        flex-direction: column-reverse;
    }

    .values-warper-2 {
        flex-direction: column;
    }
    .text-container {
        width: 100%;
        margin-top: 10vh;
    }

    .text-container p{
        width: 100%;
    }

    .img-warper-2 {
        margin-right: 0;
    }

}

</style>