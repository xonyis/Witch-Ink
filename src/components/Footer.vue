<script setup>

</script>
<template>
    <div class="main-warper">     
        <div class="left-warper" >
            <div class="info-warper">
                <img src="../assets/svg/logo-sorcière.svg" alt="">
                <h3>Witch Ink Tattoo</h3>
                <p>COPYRIGHT &copy; 💜 by xonyis</p>
                <a href="">Mention Légales</a>
            </div>
            <div class="social-container">
                <div class="social-btn">
                    <a href="" class="social-icon"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                </div>
                <div class="social-btn">
                    <a href="" class="social-icon"><font-awesome-icon icon="fa-brands fa-tiktok" /></a>
                </div>
                <div class="social-btn">
                    <a href="" class="social-icon"><font-awesome-icon icon="fa-regular fa-envelope" /></a>
                </div>
            </div>
            <ul class="menu-warper">
                <li class="foot-links"><a href="">Accueil</a></li>
                <li class="foot-links"><a href="">Gallerie</a></li>
                <li class="foot-links"><a href="">A propos</a></li>
            </ul>
        </div>
        <div class="mid-warper">
            <h3>à Propos de nous</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ad velit perferendis iusto aliquid id laboriosam repudiandae commodi ducimus numquam, et minima ex! Nihil tempore animi ea nulla necessitatibus non.</p>
        </div>
    </div>
</template>
<style scoped>
.main-warper {
    width: 100%;
    height: 40vh;
    margin-top: -7px;
    background: var(--black-soft);
    display: flex;
    justify-content: space-between;
    color: var(--white-soft);
}

.main-warper div h3{
    display: flex;
    align-items: center;
}

.left-warper {
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.info-warper img{
    width: 100%;
    height: max-content;
}

.info-warper h3{
    font-family: var(--main-font);
    font-size: 2em;
}

.info-warper p{
    font-family: var(--pop-font);
    font-size: .7em;
    margin-top: 10%;
}

.info-warper a{
    font-family: var(--pop-font);
    font-size: .6em;
    color: var(--white-soft);
}

.social-container {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.social-btn {
    border: 1px solid rgba(131, 131, 131, 0.521);
    height: 4em;
    width: 4em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}

.social-icon {
    color: var(--white-soft);
    font-size: 2em;
}

.menu-warper{
    width: fit-content;
    height: 47%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.menu-warper li{
    list-style: none;
    text-align: center;
}

.menu-warper a {
    text-decoration: none;
    color: var(--white-soft);
    font-size: 2.7em;
    font-family: var(--main-font);
}


.menu-warper a::before {
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

.menu-warper a:hover::before {
  transform: scaleX(1);
}




.mid-warper {
    width: 25%;
    margin-top: 2em;
    height: max-content;
}

.mid-warper h3 {
    font-family: var(--main-font);
    font-size: 1.7em;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 1em;
}

.mid-warper p{
    font-family: var(--sec-font);
}

</style>