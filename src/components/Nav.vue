<template>
  <nav class="nav">
    <router-link class="link" to="/">Homepage</router-link>
    <router-link class="link" to="/Bar">Bar</router-link>
    <router-link class="link" to="/Testimonials">Testimonials</router-link>
    <router-link class="link" to="/Testimonial">Testimonial | Dorian</router-link>
  </nav>
</template>

<script>
export default {
  name: 'nav',
}
</script>

<style>
.nav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  width: 100vw;
}
.link {
  text-decoration: none;
  color: black;
  margin-left: 1rem;
  padding: 1rem 0;
  transition: all .3s ease;
}
.link:hover {
  opacity: .4;
}
</style>
