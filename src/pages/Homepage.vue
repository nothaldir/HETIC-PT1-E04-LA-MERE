<template>
  <div class="homepage">
    <h1>Homepage</h1>
    <div>{{ $store.state.chapter }} / {{ chapters.length }}</div>
    <Timeline v-bind:length="chapters.length" v-bind:count="$store.state.chapter" v-bind:age="chapters[$store.state.chapter - 1].title" class="timeline"/>
  </div>
</template>

<script>
import Timeline from '../components/Timeline'
import chapters from '../data/chapters.json'

console.log(chapters)

export default {
  name: 'homepage',
  head: {
    title: {
      inner: 'HomePage',
    },
  },
  data: () => ({
    chapters,
  }),
  components: {
    Timeline,
  },
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.timeline {
  position: fixed;
  bottom: 0;
}
</style>
