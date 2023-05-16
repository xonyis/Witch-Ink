<script>
import ReviewsCard from './ReviewsCardComponent.vue';

export default {
  props: ['title','text','visited'],
  components:{
    ReviewsCard
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
        <div class="review-warper">
            <ReviewsCard
            v-for="post in posts"
	        :key="post.id"
  	        :title="post.title"
            :text="post.text"
            :visited="post.visited"
            ></ReviewsCard>
        </div>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d548.94231450589!2d6.169263857345689!3d49.12037275776112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794dfc5a8a1b091%3A0x340da7fba4702864!2sWitch&#39;Ink%20Tattoo!5e0!3m2!1sfr!2sfr!4v1683890577318!5m2!1sfr!2sfr" width="100%" height="700vh" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>    
</template>
<style scoped>
.main-container {
    width: 100%;
    height: max-content;
}

/* === CARD === */

.review-warper {
    width: 100%;
    display: flex;
}
</style>