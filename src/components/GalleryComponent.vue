<template>
    <div>
      <h1>Mur de maçonnerie</h1>
      <masonry-wall :items="items" :ssr-columns="1" :column-width="300" :gap="16">
        <template #default="{ item, index }">
          <div :style="{ height: `${index * 100}px` }">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
          </div>
        </template>
      </masonry-wall>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import MasonryWall from '@yeger/vue-masonry-wall';
  
  export default {
    components: {
      MasonryWall,
    },
    setup() {
      const items = ref([
        {
          title: 'Premier',
          description: 'Le premier élément.',
        },
        {
          title: 'Deuxième',
          description: 'Le deuxième élément.',
        },
        {
          title: 'Deuxième',
          description: 'Le deuxième élément.',
        },
        {
          title: 'Deuxième',
          description: 'Le deuxième élément.',
        },
        {
          title: 'Deuxième',
          description: 'Le deuxième élément.',
        },
      ]);
  
      return {
        items,
      };
    },
  };
  </script>

<style>
.masonry-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.masonry-item {
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

h2 {
  margin-top: 0;
}

p {
  margin-bottom: 0;
}
</style>