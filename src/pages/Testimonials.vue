<template>
  <transition name="fade">
    <div class="homepage">
      <h1>DÉCOUVREZ LES TÉMOIGNAGES DE COUPLES HOMOPARENTAUX</h1>
      <div class="couples">
        <Card class="couple" v-for="couple in couples" :title="couple.name" :subtitle="couple.location" :img="couple.img"/>
      </div>
  </transition>
</template>

<script>
import store from '../store'
import Card from '../components/Card'

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
    couples: [
      {
        name: 'Paul et Henri',
        location: 'France',
        img: 'paul_henri.png',
      },
      {
        name: 'Paul et Henri',
        location: 'France',
        img: 'paul_henri.png',
      },
      {
        name: 'Paul et Henri',
        location: 'France',
        img: 'paul_henri.png',
      },
      {
        name: 'Paul et Henri',
        location: 'France',
        img: 'paul_henri.png',
      },
      {
        name: 'Paul et Henri',
        location: 'France',
        img: 'paul_henri.png',
      },
      {
        name: 'Paul et Henri',
        location: 'France',
        img: 'paul_henri.png',
      },
    ],
  }),
}
</script>

<style scoped>
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
  color: #FCCE72;
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
