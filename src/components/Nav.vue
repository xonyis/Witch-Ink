<script>

</script>

<template>
    <nav>
       <ul>
        <li class="nav-links"><a href="">Accueil</a></li>
        <li class="nav-links"><a href="">Gallerie</a></li>
        <li class="shop-name">Witch Ink Tattoo</li>
        <li class="nav-links"><a href="">A propos</a></li>
        <li class="nav-links"><a href="">Contact</a></li>
       </ul>
    </nav>

</template>


<style scoped>


nav ul{
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    padding: 0px 25px;
    height: 5em;
    width: 100%;
    text-transform: uppercase;
    font-weight: 900 ;
    font-family: 'Ageya';
    list-style: none;
}
.shop-name {
    font-size: 50px;
    cursor: default;
    
}

.nav-links {
    list-style: none;
    font-size: 25px;
}
.nav-links a{
    text-decoration: none;
    color: var(--black-soft);
}

a {
  position: relative;
  color: var(--black-soft);
  text-decoration: none;
}

a:hover {
  color: var(--black-soft);
}

a::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 1.15px;
  bottom: 0;
  left: 0;
  background-color: var(--black-soft);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

a:hover::before {
  transform: scaleX(1);
}

.dark a {
    color: var(--white-soft);
}

.dark a::before {

  background-color: var(--white-soft);

}

</style>