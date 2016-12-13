<template>
  <div class="homepage">
    <h1>Homepage</h1>
    <div>{{ $store.state.chapter }} / {{ chaptersCount }}</div>
    <Timeline v-bind:length="chaptersCount" v-bind:count="$store.state.chapter" age="3 mois" class="timeline"/>
  </div>
</template>

<script>
import store from '../store'
import Timeline from '../components/Timeline'

export default {
  name: 'homepage',
  store,
  head: {
    title: {
      inner: 'HomePage',
    },
  },
  data: () => ({
    chaptersCount: 7,
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
