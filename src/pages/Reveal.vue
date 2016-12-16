<template>
  <div class="reveal">
    <h1 class="reveal-final">Une mère n’est pas forcément une femme.</h1>
    <h2 class="reveal-second">Lors de cette expérience, vous avez incarné un membre d'un couple homoparental.<br>Le plus important aux yeux de l'enfant est l'amour que ses parents lui apportent.</h2>
    <p class="reveal-partage">Elle vous a plu ? Partagez là !</p>
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
    <div class="reveal-bar"></div>
    <router-link class="link" to="/testimonials">
      <div class="btn">
        <div class="btn-text">Découvrir les témoignages</div>
      </div>
    </router-link>
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

.link {
  text-decoration: none;
  transition: all .3s ease;
  &:hover {
    transform: scale(1.03);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

.reveal {
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
  text-align: center;
}

.reveal-final {
  font-size: 2rem;
}

.reveal-second {
  margin: 30px 0;
}

h1 {
  text-align: center;
}

.reveal-bar {
  width: 34%;
  background-color: white;
  min-height: 3px;
  margin: 10px 0;
}

.reveal-partage {
  margin-bottom: 5px;
}

.btn {
  margin-top: 10px;
  background-color: $primary-color;
}

.btn-text {
  color: white;
  font-size: 1.3rem;
  padding: 20px 30px;
}

.social {
  display: flex;
  margin: 0.5rem 0;
  flex-flow: row nowrap;
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
