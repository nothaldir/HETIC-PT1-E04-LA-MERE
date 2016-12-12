<template>
  <div class="testimonial">
    <p>{{ $route.params.id }}</p>
  </div>
</template>
<script>
import couples from '../data/couples.json'

/* eslint-disable */
console.log(couples)
export default {
  name: 'testimonial',
  head: {
    title: {
      inner: 'Testimonial',
    },
  },
}
</script>

<style>
  .testimonial {
    background-color: red;
  }
</style>
