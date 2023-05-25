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
      <masonry-wall :items="items" :ssr-columns="1" :column-width="300" :gap="16">
        <template #default="{ item, index }">
          <div :style="{ height: `${index * 100}px` }">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
          </div>
        </template>
      </masonry-wall>
      </div>
    </main>
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
</style>