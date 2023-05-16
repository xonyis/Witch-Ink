<script>
export default {
  props: ['title','text','visited'],
  
}
</script>
<template>
    <div class="main-container">
        <div class="card-warper">
            <div class="card-container">
                <div class="title-container">
                    <h3>{{ title }}</h3>
                    <div class="icon-star"><font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon icon="fa-solid fa-star fa-2xl" /><font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon icon="fa-solid fa-star" /></div>
                </div>
                <p class="text-review">{{ text }} <br> <span>Visité en {{ visited }}</span></p>                
            </div>
        </div>    
    </div>    
</template>
<style scoped>
.main-container {
    width: 100%;
    height: max-content;
}

/* === CARD === */
.card-warper {
    width: 100%;
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.text-review {
    height: 50%;
}

.text-review span {
    font-size: .8em;
    color: var(--coner-color);
}

.card-container {
    width: 25vw;
    height: 40vh;
    padding: 5vh 3vw;
    padding-bottom: 7vh;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.card-container h3 {
    font-size: 2.5em;
    font-family: var(--main-font);
    letter-spacing: 2px;
    font-weight: 700;
    text-transform: uppercase;
}

.icon-star {
    width: 7em;
    display: flex;
    font-size: 1.5em;
    justify-content: space-around;
    color: #ffbd00;
}

.visited {
    color: var(--coner-color);
    font-size: .8em;
    font-family: var(--pop-font);
}
</style>