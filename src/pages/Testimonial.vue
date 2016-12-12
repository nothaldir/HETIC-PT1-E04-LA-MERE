<template>
  <transition name="fade">
    <div class="testimonial">
      <p>{{ $route.params.id }}</p>
      <p> {{ couple.name}}</p>
    </div>
  </transition>
</template>
<script>
import couples from '../data/couples.json'

/* eslint-disable */
console.log(this);
export default {
  name: 'testimonial',
  head: {
    title: {
      inner: 'Testimonial',
    },
  },
  created: function() {
    this.couple = couples.find((item) => item.slug === this.$route.params.id)
  }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: all .5s
  }
  .fade-enter, .fade-leave-active {
    transform: rotate(-170deg);
    transform-origin: bottom;
  }
  .testimonial {
    background-color: red;
  }
</style>
