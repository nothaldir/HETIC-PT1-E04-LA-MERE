<template>
  <transition name="fade">
    <div class="homepage">
      <h1>DÉCOUV  REZ LES TÉMOIGNAGES DE COUPLES HOMOPARENTAUX</h1>
      <div class="couples">
        <router-link class="link" v-for="couple in couples" v-bind:to="'/testimonials/' + couple.slug">
          <Card class="couple" :title="couple.name" :subtitle="couple.location" :img="couple.img"/>
        </router-link>
      </div>
  </transition>
</template>

<script>
import store from '../store'
import Card from '../components/Card'
import couples from '../data/couples.json'

export default {
  name: 'testimonials',
  store,
  head: {
    title: {
      inner: 'Testimonials',
    },
  },
  components: {
    Card,
  },
  data: () => ({
    couples,
  }),
}
</script>

<style scoped lang="scss">
  @import '../variables.scss';

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  h1 {
    width: 100%;
    height: 100px;
    margin: auto;
    margin-top: 40px;
    width: 36rem;
    font-size: 26px;
    color: $primary-color;
  }
  .link {
    text-decoration: none;
  }

  .couples {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 70rem;
    margin: auto;
  }
</style>
