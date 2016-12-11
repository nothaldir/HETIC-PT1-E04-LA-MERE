<template>
  <transition name="fade">
    <div class="homepage">
      <h1>Testimonials</h1>
      <div class="couples">
        <Card class="couple" v-for="couple in couples" :title="couple.name" :subtitle="couple.location" :img="couple.img"/>
      </div>
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
        name: 'Paul et Henry',
        location: 'France',
        img: 'paul_henri.png',
      },
      {
        name: 'Paul et Henry',
        location: 'France',
        img: 'paul_henri.png',
      },
      {
        name: 'Paul et Henry',
        location: 'France',
        img: 'paul_henri.png',
      },
      {
        name: 'Paul et Henry',
        location: 'France',
        img: 'paul_henri.png',
      },
      {
        name: 'Paul et Henry',
        location: 'France',
        img: 'paul_henri.png',
      },
      {
        name: 'Paul et Henry',
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
.couples {
  display: flex;
  flex-direction: row;
}
.couple {

}

</style>
