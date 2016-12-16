<template>
  <div class="testimonial">
    <div class="video-overlay">
      <div class="testimonial-title testimonial-infos">Témoignage</div>
      <div class="testimonial-infos">{{ couple.name }}</div>
      <div class="testimonial-infos">{{ couple.location }}</div>
    </div>
    <iframe width="560" height="315" v-bind:src="couple.video + '?showinfo=0&iv_load_policy=3&controls=0'" frameborder="0" allowfullscreen></iframe>
    <div class="testimonal__content">
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
           <div class="social">
  <!-- Sharingbutton Facebook -->
      <a class="resp-sharing-button__link" href="https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fadrienmenegaux.com%2F" target="_blank" aria-label="">
        <div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
          </div>
        </div>
      </a>

      <!-- Sharingbutton Twitter -->
      <a class="resp-sharing-button__link" href="https://twitter.com/intent/tweet/?text=Magna%20Mater&amp;url=http%3A%2F%2Fadrienmenegaux.com%2F" target="_blank" aria-label="">
        <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>
          </div>
        </div>
      </a>

      <!-- Sharingbutton E-Mail -->
      <a class="resp-sharing-button__link" href="mailto:?subject=Magna%20Mater&amp;body=http%3A%2F%2Fadrienmenegaux.com%2F" target="_self" aria-label="">
        <div class="resp-sharing-button resp-sharing-button--email resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.25 14.43l-3.5 2c-.08.05-.17.07-.25.07-.17 0-.34-.1-.43-.25-.14-.24-.06-.55.18-.68l3.5-2c.24-.14.55-.06.68.18.14.24.06.55-.18.68zm4.75.07c-.1 0-.2-.03-.27-.08l-8.5-5.5c-.23-.15-.3-.46-.15-.7.15-.22.46-.3.7-.14L12 13.4l8.23-5.32c.23-.15.54-.08.7.15.14.23.07.54-.16.7l-8.5 5.5c-.08.04-.17.07-.27.07zm8.93 1.75c-.1.16-.26.25-.43.25-.08 0-.17-.02-.25-.07l-3.5-2c-.24-.13-.32-.44-.18-.68s.44-.32.68-.18l3.5 2c.24.13.32.44.18.68z"/></svg>
          </div>
        </div>
      </a>
    </div>
          <div class="testimonial-subtitle testimonial-subtitle-final">Découvrir d'autres témoignages</div>
        </div>
        <div class="similars">
          <router-link class="link" v-for="couple in similars" v-bind:to="'/testimonials/' + couple.slug">
            <Card class="couple" :title="couple.name" :subtitle="couple.location" :img="couple.img"/>
          </router-link>
        </div>
      </div>
    </div>
</template>
<script>
import couples from '../data/couples.json'
import Card from '../components/Card'
import Social from '../components/Social'

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
    Social,
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
  mounted() {
    /* eslint-disable */
    var similar = document.querySelectorAll('.similars a');
    for(var i = 0; i<similar.length; i++) {
      similar[i].addEventListener('click', () => {
        this.index = couples.findIndex(item => item.slug === this.$route.params.id)
        this.couple = couples[this.index]
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      });
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../variables.scss';
  .video-overlay {
    position: absolute;
    font-size: 2em;
    color: white;
    padding: 20px;
  }

  .testimonial {
    text-align: initial;
    height: 100%;
    margin: auto;
  }

  iframe {
    width: 100%;
    display: block;
    height: 100vw;
    @include respond-to(50rem) {
      height: 600px;
    }
  }

  .testimonal__content {
    padding: 20px;
  }

  .paragraphe {
    margin: 20px 0;
    line-height: 140%;
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
    padding: 20px 0;
    font-size: 1.4rem;
    line-height: 140%;
  }

  .testimonial-infos {
    text-transform: uppercase;
    opacity: 1;
  }

  .testimonial-subtitle {
    text-transform: uppercase;
    font-weight: bolder;
    color: $primary-color;
    font-size: 1.4rem;
  }

  .testimonial-subtitle-special {
    margin-top: 20px;
  }

  .testimonial-subtitle-final {
    text-align: center;
  }

  .testimonial__text {
    max-width: 34rem;
    margin: auto;
  }

  .quote {
    display: flex;
  }

  .quote-bar {
    min-height: 40px;
    max-height: 100%;
    min-width: 6px;
    background-color: $primary-color;
  }

  .quote-text {
    margin: auto 0;
    padding-left: 10px;
    font-style: italic;
    font-size: 1.1rem;
    line-height: 140%;
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

  .social {
  width: 100%;
  display: flex;
  margin: 1.5rem auto;
  flex-flow: row nowrap;
  justify-content: center;
}

.resp-sharing-button__link,
.resp-sharing-button__icon {
  display: inline-block
}

.resp-sharing-button__link {
  text-decoration: none;
  color: #fff;
  margin: 0.5em
}

.resp-sharing-button__link:hover {
    transform: scale(1.03);
  }

.resp-sharing-button {
  transition: 25ms ease-out;
  padding: 0.7em 2.13em;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif
}

.resp-sharing-button__icon svg {
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.4em;
  vertical-align: top
}

.resp-sharing-button--small svg {
  margin: 0;
  vertical-align: middle
}

/* Non solid icons get a stroke */
.resp-sharing-button__icon {
  stroke: #fff;
  fill: none
}

/* Solid icons get a fill */
.resp-sharing-button__icon--solid,
.resp-sharing-button__icon--solidcircle {
  fill: #fff;
  stroke: none
}

.resp-sharing-button--twitter {
  background-color: $primary-color;
}

.resp-sharing-button--twitter:hover {
  background-color: $primary-color;
}

.resp-sharing-button--pinterest {
  background-color: $primary-color;
}

.resp-sharing-button--pinterest:hover {
  background-color: $primary-color;
}

.resp-sharing-button--facebook {
  background-color: #3b5998
}

.resp-sharing-button--facebook:hover {
  background-color: #2d4373
}

.resp-sharing-button--tumblr {
  background-color: #35465C
}

.resp-sharing-button--email {
  background-color: #777
}

.resp-sharing-button--email:hover {
  background-color: #5e5e5e
}

.resp-sharing-button--facebook {
  background-color: $primary-color;
  border-color: $primary-color;
}

.resp-sharing-button--facebook:hover,
.resp-sharing-button--facebook:active {
  background-color: $primary-color;
  border-color: $primary-color;
}

.resp-sharing-button--twitter {
  background-color: $primary-color;
  border-color: $primary-color;
}

.resp-sharing-button--twitter:hover,
.resp-sharing-button--twitter:active {
  background-color: $primary-color;
  border-color: $primary-color;
}

.resp-sharing-button--email {
  background-color: $primary-color;
  border-color: $primary-color;
}

.resp-sharing-button--email:hover,
.resp-sharing-button--email:active {
  background-color: $primary-color;
  border-color: $primary-color;
}
</style>
