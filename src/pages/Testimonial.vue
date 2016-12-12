<template>
  <transition name="fade">
    <div class="testimonial">
      <div class="testimonial-title testimonial-infos">Témoignage</div>
      <div class="testimonial-infos">{{ couple.name }}</div>
      <div class="testimonial-infos">{{ couple.location }}</div>
      <div class="testimonial__text">
        <div class="testimonial-subtitle">Leur histoire</div>
        <p>{{ couple.history }}</p>
        <div class="testimonial-subtitle">Les chiffres</div>
        <p v-html="couple.numbers"></p>
        <div class="testimonial-subtitle">Les lois</div>
        <p>{{ couple.law }}</p>
        <div class="testimonial-subtitle">Découvrir d'autres témoignages</div>
      </div>
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

<style lang="scss">
@import '../variables.scss';

  .testimonial {
    text-align: initial;
  }

  .testimonial-title {
    font-weight: bolder;
  }

  .testimonial-infos {
    text-transform: uppercase;
  }

  .testimonial-subtitle {
    text-transform: uppercase;
    font-weight: bolder;
    color: $primary-color;
  }

  .testimonial__text {
    max-width: 56rem;
    margin: auto;
  }
</style>
