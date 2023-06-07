<script>
import ReviewsCard from './ReviewsCardComponent.vue';
import 'vue3-carousel/dist/carousel.css'
import { defineComponent } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  props: ['title','text','visited'],
  components:{
    ReviewsCard,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      posts: [
          { id: 1, title: 'Jade', visited: 'février 2023',text: 'J’ai fait mon premier vrai tatouage dans son salon et j’ai directement aimé son style, il a su représenter ce que j’avais dans la tête des le premier dessin ! Très professionnel et accueillant ! Je comptes bien revenir et conseiller son salon !' },
          { id: 2, title: 'Océane', visited:'janvier 2023',text: 'Super rencontre avec le tatoueur, très professionnel et très sympas ! On a pris du temps pour bien disposé les éléments de mon futur tatouage, après trois heures de travail et un peu de souffrance 😄 j’ai un magnifique tatouage, encore plus beaux que ce que j’imaginais ! Je reviendrais c’est sur ! Encore merci et bravo 😘' },
          { id: 3, title: 'Jadaoz', visited: 'septembre 2022',text: "J'ai réalisé 2 tatouages chez Witch'Ink Tattoo, un flash et un petit projet personnel, et le tatoueur a su parfaitement entendre et s'adapter à ce que je souhaitais. A un prix abordable, Witch'Ink Tattoo offre un service agréable, dans les règles d'hygiène et le respect de vos attentes au sujet du tatouage. Merci beaucoup ! :)" }
      ]
    }
  }
}



</script>
<template>
    <div class="main-container">
      <div class="title-warp">
        <h2>Témoignages</h2>
        <h3>Découvrez les témoignages de nos clients satisfaits et laissez-vous inspirer par les réalisations artistiques de notre tatoueur talentueux.</h3>
      </div>
        <div class="review-warper">     
          <Carousel>
            <Slide v-for="post in posts" :key="post">
              <div class="carousel__item">
                <div class="card-warper">

                <div class="card-container">
                <div class="title-container">
                    <h3>{{ post.title }}</h3>
                    <div class="icon-star"><font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon icon="fa-solid fa-star fa-2xl" /><font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon icon="fa-solid fa-star" /></div>
                </div>
                <p class="text-review"> <br>{{ post.text }} <br> <span>Visité en {{ post.visited }}</span></p>                
            </div>  
          </div>
              </div>
            </Slide>

      <template #addons>
      <Navigation />
      <Pagination />
      </template>
      </Carousel>
        </div>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d548.94231450589!2d6.169263857345689!3d49.12037275776112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794dfc5a8a1b091%3A0x340da7fba4702864!2sWitch&#39;Ink%20Tattoo!5e0!3m2!1sfr!2sfr!4v1683890577318!5m2!1sfr!2sfr" width="100%" height="700vh" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>    
</template>

<!--          <ReviewsCard
              v-for="post in posts"
	            :key="post.id"
  	          :title="post.title"
              :text="post.text"
              :visited="post.visited"
              ></ReviewsCard> -->
<style scoped>


.main-container {
    width: 100%;
    height: max-content;
}

.title-warp {
  width: 100%;
  height: max-content;
  text-align: center;
}

.title-warp h2{
  font-family: var(--main-font);
  font-size: 3em;
}

.title-warp h3 {
  font-family: var(--sec-font);
  width: 70%;
  font-size: 1.5em;
  margin: auto;
  margin-top: 1.5em;
}

/* === CARD === */

.card-warper {
    width: 100%;
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.review-warper {
    width: 100%;
    height: max-content;
}

.carousel-container {
  width: 100%;
  height: max-content;
}
.carousel__item {
  height: max-content;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

/* === CARD === */



.text-review {
    height: 50%;
    font-size: 0.9em;
}

.text-review span {
    font-size: .8em;
    color: var(--coner-color);
}

.card-container {
    width: 35%;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
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

@media screen and (max-width: 1125px){
    .card-container {
    width: 75%;
}

}
</style>