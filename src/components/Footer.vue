<script setup>

</script>
<template>
    <div class="main-warper">
        <div class="left-warper">
            <h3>à Propos de nous</h3>
            <p>DrawTattoo est le premier salon de tatouage à l'influence urbaine Hip Hop. Nous soutenons l'affirmation de soi et valorisons la différence.</p>
        </div>
        <div class="mid-warper" >
            <h2 >Witch Ink Tattoo</h2>
            <ul>
                <li class="foot-links"><a href="">Accueil</a></li>
                <li class="foot-links"><a href="">Gallerie</a></li>
                <li class="foot-links"><a href="">A propos</a></li>
                <li class="foot-links"><a href="">Contact</a></li>
            </ul>
        </div>
        <div class="right-warper">
            <h3>nos réseaux sociaux</h3>
            <div class="social-container">
                <div class="social-btn">
                    <a href=""><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                </div>
                <div class="social-btn">
                    <font-awesome-icon icon="fa-brands fa-tiktok" />
                </div>
                <div class="social-btn">
                    <font-awesome-icon icon="fa-regular fa-envelope" />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.main-warper {
    width: 100%;
    height: 45vh;
    background: var(--black-soft);
    display: flex;
    justify-content: space-around;
    color: var(--white-soft);
}

.main-warper div h3{
    display: flex;
    align-items: center;
}



.left-warper {
    width: 25%;
    margin-top: 2em;
    height: max-content;
}

.left-warper h3 {
    font-family: var(--main-font);
    font-size: 1.7em;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 1em;
}

.mid-warper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.mid-warper ul{
    padding-inline-start: 0;
}

.mid-warper li{
    list-style: none;
    text-align: center;
    line-height: 2.7em;
}

.mid-warper h2 {
    font-family: var(--main-font);
    font-size: 3em;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: .5em;
}

.mid-warper a {
    text-decoration: none;
    color: var(--white-soft);
    font-size: 2em;
    font-family: var(--main-font);
}


.mid-warper a::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: var(--white-soft);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.mid-warper a:hover::before {
  transform: scaleX(1);
}

.right-warper {
    display: flex;
    flex-direction: column;
    margin-top: 2em;
    width: max-content;
}

.right-warper h3 {
    font-family: var(--main-font);
    font-size: 1.7em;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: .5em;
    float: right;
    
}

.social-container {
    width: 100%;
    height: 3.5em;
    display: flex;
    justify-content: space-evenly;
}

.social-btn {
    border: 1px solid;
    height: 100%;
    width: 3.5em;

}
</style>