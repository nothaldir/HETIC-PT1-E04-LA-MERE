<template>
  <div class="homepage">
    <h1>MAGNA<br>MATER</h1>
    <router-link class="button" to="/experience">Vivre l’expérience</router-link>
    <p class="description">« Un rôle est quelque chose d’extérieur à soi, que
      l’on "joue" et que n’importe qui peut incarner.»
    </p>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  head: {
    title: {
      inner: 'Home',
    },
  },
}
</script>

<style scoped lang="scss">
@import '../variables.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.homepage {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  z-index: -1;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/homepage_cover.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  color: white;
}
h1 {
  font-size: 4rem;
  user-select: none;
  cursor: default;
  text-align: center;
}
.button {
  padding: 2rem 4rem;
  letter-spacing: 4px;
  margin-top: 2rem;
  font-size: 1.5rem;
  background-color: $primary-color;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  transition: all .1s ease-in;
  &:hover {
    transform: scale(1.03);
  }
}
.description {
  margin-top: 3rem;
  font-size: 1.625rem;
  max-width: 40rem;
  text-align: center;
}
</style>
