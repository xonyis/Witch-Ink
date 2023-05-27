<template>
    <div class="main-container">
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
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  export default {
    setup() {
      const photos = ref([]);
  
      // Remplacez ces valeurs par les clés d'accès de votre application Instagram
      const clientId = '779555516968387';
      const accessToken = 'IGQVJXXzRSd1dDdUkxVi1nRnc3UjVMeXFOc2pNVXdlSXBxTHJoTlotcGNpTkFzX3RWXzVmMUoxZAER3R1VmQXpkdk94Um1DSU1tRm9VblMwUjg0TzN4emc4dDJqQUJhVlZAzUVRzNkV1QkxWVWdBMWpLVgZDZD';
  
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