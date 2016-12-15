<template>
  <div class="testimonial">
      <div class="video-test">
        <div class="testimonial-title testimonial-infos">Témoignage</div>
        <div class="testimonial-infos">{{ couple.name }}</div>
        <div class="testimonial-infos">{{ couple.location }}</div>
      </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/_zPlr-o-YEQ?showinfo=0&iv_load_policy=3&controls=0" frameborder="0" allowfullscreen></iframe>
    <div class="testimonial__text">
      <div class="testimonial-subtitle testimonial-subtitle-special">Leur histoire</div>
      <p class="paragraphe">{{ couple.history1 }}</p>
      <p class="paragraphe">{{ couple.history2 }}</p>
      <div class="quote">
      <div class="quote-bar"></div>
      <div class="quote-text">{{ couple.quote1 }}</div>
    </div>
    <p class="paragraphe">{{ couple.history3 }}</p>
  </div>
  <div class="testimonial-bar">
    <div class="testimonial-infos testimonial-bar-text">L'homoparentalité <div>en {{ couple.location }}</div></div>
  </div>
    <div class="testimonial__text">
      <div class="testimonial-subtitle">Les chiffres</div>
      <div class="quote quote-special">
        <div class="quote-bar"></div>
        <div class="quote-text">{{ couple.quote2 }}</div>
      </div>
      <p v-html="couple.numbers" class="paragraphe"></p>
      <div class="testimonial-subtitle">Les lois</div>
        <p v-html="couple.date1" class="paragraphe"></p>
        <p v-html="couple.date2" class="paragraphe"></p>
        <p v-html="couple.date3" class="paragraphe"></p>
        <p v-html="couple.date4" class="paragraphe"></p>
      <div class="testimonial-subtitle">Découvrir d'autres témoignages</div>
    </div>
    <div class="similars">
      <router-link class="link" v-for="couple in similars" v-bind:to="'/testimonials/' + couple.slug">
        <Card class="couple" :title="couple.name" :subtitle="couple.location" :img="couple.img"/>
      </router-link>
    </div>
  </div>
</template>
<script>
import couples from '../data/couples.json'
import Card from '../components/Card'

// console.log(this)
export default {
  name: 'testimonial',
  head: {
    title: {
      inner: 'Testimonial',
    },
  },
  components: {
    Card,
  },
  data: () => ({
    index: 0,
    couple: {},
    similars: [],
  }),
  created() {
    this.index = couples.findIndex(item => item.slug === this.$route.params.id)
    this.couple = couples[this.index]
    for (let i = 1; i < 4; i += 1) {
      this.similars.push(couples[(this.index + i) % couples.length])
    }
  },
}
</script>

<style lang="scss">
@import '../variables.scss';

  .video-test {
    position: absolute;
    width: 100%;
    font-size: 2em;
    color: white;
    margin: 20px;
  }

  .testimonial {
    text-align: initial;
    width: 100%;
    height: 100%;
  }

  iframe {
    width: 100%;
    height: 500px;
    display: block;
  }

  .paragraphe {
    margin: 20px 0;
  }

  .testimonial-title {
    font-weight: bolder;
  }

  .testimonial-bar {
    background-color: $primary-color;
    margin-bottom: 20px;
  }

  .testimonial-bar-text {
    text-align:center;
    color: white;
    font-weight: bolder;
    padding: 15px 0;
  }

  .testimonial-infos {
    text-transform: uppercase;
    opacity: 1;
  }

  .testimonial-subtitle {
    text-transform: uppercase;
    font-weight: bolder;
    color: $primary-color;
  }

  .testimonial-subtitle-special {
    margin-top: 20px;
  }

  .testimonial__text {
    max-width: 32rem;
    margin: auto;
  }

  .quote {
    display: flex;
  }

  .quote-bar {
    height: 40px;
    min-width: 6px;
    background-color: $primary-color;
  }

  .quote-text {
    margin: auto 0;
    padding-left: 10px;
    font-style: italic;
  }

  .quote-special {
    margin-top: 20px;
  }
  .similars {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    .link {
      text-decoration: none;
      transform: scale(.8);
    }
  }
</style>
