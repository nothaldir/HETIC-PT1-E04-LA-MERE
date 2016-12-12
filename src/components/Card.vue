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

<style scoped lang="scss">
  @import '../variables.scss';
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
    background-color: $primary-color;
    text-align: left;
    padding: 0.8rem;
  }
  .title {
    color: red;
    color: white;
  }
  .subtitle {
    color: white;
  }
</style>
