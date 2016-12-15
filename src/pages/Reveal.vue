<template>
  <div class="reveal">
    <h1>Texte explicatif sur l’expérience proposée à l’utilisateur</h1>
  </div>
</template>

<script>
export default {
  name: 'Reveal',
  head: {
    title: {
      inner: 'Reveal',
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

.reveal {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
h1 {
  text-align: center;
}
</style>
