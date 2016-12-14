<template>
  <nav class="nav-bar" v-if="$route.path !== '/'">
    <router-link class="link" to="/">Homepage</router-link>
    <router-link class="link" to="/testimonials">Testimonials</router-link>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar',
}
</script>

<style lang="scss" scoped>
@import '../variables.scss';
.nav-bar {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  width: 100vw;
  .link {
    text-decoration: none;
    user-select: none;
    color: black;
    margin-left: 1rem;
    padding: 2rem 0;
    transition: all .3s ease;
    &:hover {
      opacity: .4;
      color: $primary-color;
    }
  }
}
</style>
