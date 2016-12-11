<template>
  <article class="container">
    <div class="cover" :style="{backgroundImage: 'url(' + imagePath + ')'}"  :alt="title"></div>
    <div class="description">
      <div class="title">{{ title }}</div>
      <div class="subtitle">{{ subtitle }}</div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'card',
  props: ['img', 'title', 'subtitle'],
  computed: {
    /* eslint-disable */
    imagePath: function () {
      return require('../assets/' + this.img)
    }
  },
}
</script>

<style scoped>
  .container {
    max-width: 10rem;
    overflow: hidden;
  }
  .cover {
    background-size: cover;
    width: 10rem;
    height: 10rem;
  }
  .description {
    background-color: #FCCE72;
  }
  .title {
    color: white;
  }
  .subtitle {
    color: white;
  }

</style>
