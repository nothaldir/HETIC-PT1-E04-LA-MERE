<template>
  <div class="homepage">
    <h1>MAGNA<br>MATTER</h1>
    <router-link class="button" to="/experience">Démarrer l’expérience</router-link>
    <p class="description">« phrase poignante sur le rôle d’une mère tu vois l’idée
      et qui pourrait défiler si on en met plusieurs »
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
