<template>
    <main>
      <h1>Notre Galerie</h1>
      <div class="menu-container">
        <ul>
          <li class="menu-items"><a href="">Tout</a></li>
          <li class="menu-items"><a href="">Grande pièces</a></li>
          <li class="menu-items"><a href="">Flash dispo</a></li>
        </ul>
      </div>
      <div class="galerie-container">

      <h1>Photos Instagram</h1>
      <div v-if="photos.length > 0" class="instagram-photos">
        <div v-for="photo in photos" :key="photo.id" class="instagram-photo">
          <img :src="photo.media_url" :alt="photo.caption" />
        </div>
      </div>
      <div v-else>
        <p>Aucune photo Instagram disponible.</p>
      </div>
      </div>
    </main>
  </template>
  
  <script>
import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  export default {
    setup() {
      const photos = ref([]);
  
      // Remplacez ces valeurs par les clés d'accès de votre application Instagram
      const clientId = '779555516968387';
      const accessToken = 'IGQVJWbjN2T0ZAIR0NZAeWxmYlFHT2RUT2l0czVFNXg0SWlLSlNRb0lTeVhLdlZAxX3A3cDBDSi1kcWNKTmQ0NWo5Y2dtSWU1V3lmRGpKX25JQzlOblNvcW51dElSX3lFcnJQUGl0aUw4bEc1R3dweHFhSAZDZD';
  // tristan token IGQVJWbjN2T0ZAIR0NZAeWxmYlFHT2RUT2l0czVFNXg0SWlLSlNRb0lTeVhLdlZAxX3A3cDBDSi1kcWNKTmQ0NWo5Y2dtSWU1V3lmRGpKX25JQzlOblNvcW51dElSX3lFcnJQUGl0aUw4bEc1R3dweHFhSAZDZD
      onMounted(async () => {
        try {
          const response = await axios.get(
            `https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${accessToken}`
          );
          photos.value = response.data.data;
        } catch (error) {
          console.error('Erreur lors de la récupération des photos Instagram', error);
        }
      });
  
      return {
        photos,
      };
    },
  };
  </script>

<style>

main {
  margin-top: 10vh;
}

.menu-container{
  display: flex;
  justify-content: center;
  margin-top: 3vh;

}

.menu-container ul{
  display: flex;
  justify-content: space-around;
  width: 30vw;
  background: #F2F2F2;
  padding: 1.2em 1em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  border-radius: 50px;
}

.menu-container li {
  list-style: none;
}

.menu-container a {
  text-decoration: none;
  color: var(--black-soft);
}

.galerie-container {
  margin-top: 5vh;
}

.masonry-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.masonry-item {
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-family: var(--main-font);
  font-size: 3em;
}

h2 {
  margin-top: 0;
}

p {
  margin-bottom: 0;
}

.instagram-photos {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .instagram-photo {
    width: 300px;
  }
  
  .instagram-photo img {
    width: 100%;
  }

  .main-container {
    height: 100vh;
  }
</style>