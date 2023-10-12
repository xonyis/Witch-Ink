<script>

</script>
<template>
    <main>
        <header>
            <h1>Bienvenue sur notre page À Propos ! </h1>
        </header>
        <div class="intro-container">
            <p>Chez Witch Ink Tattoo, nous sommes passionnés par l'art du tatouage et nous sommes fiers de partager notre expertise avec vous.</p>
        </div>
        <div class="xp-bar">
            <div class="xp-item">
                <span><font-awesome-icon icon="fa-regular fa-circle-check" /></span>
                <p>5 ans d'éxpériences</p>
            </div>
            <div class="xp-item">
                
                <span><font-awesome-icon icon="fa-solid fa-star" /></span>
                <p>5 étoiles google</p>
            </div>
        </div>
        
        <div class="shop-container">
            <div class="shop-l">
                image du shop
            </div>
            <div class="shop-r">
                    <h3>Notre Salon</h3>
                    <p>Notre salon est un lieu où la créativité s'exprime à travers des tatouages uniques et personnalisés.</p>
            </div>
        </div>
        <div class="shop-container">
            <div class="shop-bot-l">
                
            </div>
            <div class="shop-bot-r">
                image shop
            </div>
        </div>

        <div class="grid-parent">
            <div class="grid-1"> 
                <h3>Hygiène & Entretien</h3>
            </div>
            <div class="grid-2"> 
                <p>Chez witch Ink Tattoo, nous accordons une priorité absolue à l'hygiène et à la sécurité de nos clients. Nous comprenons l'importance d'un environnement propre et stérile pour assurer des tatouages sans risque. C'est pourquoi nous suivons rigoureusement les normes les plus strictes en matière d'hygiène et de désinfection. </p>
            </div>
            <div class="grid-3"><h3>Disponibilité</h3></div>
            <div class="grid-4">
                <ul>
                    <li>Lundi 10:00 - 17:00</li>
                    <li>Mardi 10:00 - 17:00</li>
                    <li>Mercredi 10:00 - 17:00</li>
                    <li>Jeudi 10:00 - 17:00</li>
                    <li>Vendredi 10:00 - 17:00</li>

                </ul>
            </div>
        </div>
    </main>
</template>
<style scoped>
header {
    width: 100%;
    height: 60vh;
    background: #00000032;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3em;
}

header h1 {
    font-family: var(--main-font);
    font-size: 3.5em;
}

.intro-container {
    height: 50vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.intro-container p {
    width: 50%;
    font-size: 2em;
    font-family: var(--main-font);
}
.xp-bar {
    width: 100%;
    height: 25vh;
    background: var(--black-soft);
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;
}

.xp-item {
    color: var(--white-soft);
}

.xp-item span {
    font-size: 2em;
}

.shop-container {
    height: 80vh;
    display: flex;
}

.shop-l {
    height: 100%;
    width: 50%;
    background: #00000053;
    display: flex;
    align-items: center;
    justify-content: center;
}

.shop-r {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.shop-r h3 {
    font-family: var(--main-font);
    text-align: center;
    font-size: 2.5em;
}
.shop-r p {
    font-family: var(--main-font);
    text-align: center;
    font-size: 1.5em;
    width: 75%;
}


.shop-bot-r {
    height: 100%;
    width: 40%;
    background: #00000053;
    display: flex;
    align-items: center;
    justify-content: center;
}

.shop-bot-l {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.shop-bot-l p {
    width: 75%;
}

/* GRID */

.grid-parent {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    /* padding-top: 2em; */
    background: var(--black-soft);

}

.grid-1 { 
    grid-area: 1 / 1 / 2 / 2; 
    display: flex;
    align-items: center;
    justify-content: center;
}

.grid-1 h3 {
    font-family: var(--main-font);
    color: var(--white-soft);
    font-size: 2em;
}
.grid-2 { 
    grid-area: 1 / 2 / 2 / 3; 
    background: var(--white-soft);
    display: flex;
    align-items: center;
    justify-content: center;
}

.grid-2 p {
    font-size: 1.5em;
    width: 80%;
    font-family: var(--main-font);
}
.grid-3 { 
    grid-area: 2 / 1 / 3 / 2; 
    background: var(--white-soft);
    display: flex;
    align-items: center;
    justify-content: center;
}

.grid-3 h3 {
    font-family: var(--main-font);
    color: var(--black-soft);
    font-size: 2em;
}
.grid-4 { 
    grid-area: 2 / 2 / 3 / 3; 
    color: var(--white-soft);
    display: flex;
    align-items: center;

}

.grid-4 ul {
    margin-left: 7vw;
    line-height: 3em;
}
.grid-4 li {
    font-size: 1.5em;
    font-family: var(--main-font);
}

@media screen and (max-width: 768px) {

    .shop-r {
        width: 100%;
        height: 50vh;
    }

    .shop-l {
        width: 100%;
    }
    .shop-bot-r {
        width: 100%;
        border-top: 1px solid ;
    }

    .shop-bot-l {
        display: none;
    }

    header {
        margin-top: 0;
    }

    .shop-container {
        flex-direction: column;
    }
    .grid-1 h3 {
        font-size: 1.5em;
        text-align: center;
    }
}

@media screen and (max-width: 425px) {
    .intro-container {
        font-size: .7em;
    }

    .shop-r, .grid-4, .grid-3 {
        font-size: .7em;
    }

    .grid-2 {
        font-size: .5em;
    }
}
</style>