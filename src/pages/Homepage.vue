<template>
  <transition name="fade">
    <div class="homepage">
      <h1>Homepage</h1>
    </div>
  </transition>
</template>

<script>
import store from '../store'

export default {
  name: 'homepage',
  store,
  head: {
    title: {
      inner: 'HomePage',
    },
  },
  components: {
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

</style>
