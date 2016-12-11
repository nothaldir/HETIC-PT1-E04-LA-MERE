<template>
  <transition name="fade">
    <div class="bar">
      <h1>Bars</h1>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'bar',
  head: {
    title: {
      inner: 'Bar',
    },
  },
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
