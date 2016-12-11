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
    min-width: 20rem;
    max-width: 20rem;
    position: relative;
    margin: 1.5rem;
  }
  .cover {
    background-size: cover;
    width: 100%;
    height: 20rem;
  }
  .description {
    background-color: #FCCE72;
    text-align: left;
    padding: 0.8rem;
  }
  .title {
    color: white;
  }
  .subtitle {
    color: white;
  }

</style>
