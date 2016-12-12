<template>
  <div class="testimonial">
    <p>{{ $route.params.id }}</p>
  </div>
</template>
<script>
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
