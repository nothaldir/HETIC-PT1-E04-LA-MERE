<template>
  <div class="experience">
    <video src="http://adrienmenegaux.com/video/experience_video.mp4" muted autoplay class="video">
    </video>
    <audio src="http://adrienmenegaux.com/sound/castle_in_the_sky_theme_%20joe_hisaishi.mp3" autoplay loop></audio>
    <div class="circleContainer" :style="{opacity: dragShow ? 1 : 0}">
      <div class="landingZone" :class="{ grow: onTarget}"></div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="rail">
        <path d="m0 0 c 50 0, 100 50, 100 100"></path>
      </svg>
      <div
      class="circle"
      @mousedown="grab"
      @touchstart="grab"
      :class="{ grabbing: grabbing }"
      v-bind:style="{transform: 'rotate(' + angle + 'rad)'}"
      ></div>
    </div>
    <Timeline v-bind:length="chapters.length" v-bind:count="$store.state.chapter" v-bind:age="chapters[$store.state.chapter - 1].title" class="timeline"/>
  </div>
</template>

<script>
import Timeline from '../components/Timeline'
import chapters from '../data/chapters.json'

export default {
  name: 'experience',
  head: {
    title: {
      inner: 'Experience',
    },
  },
  data: () => ({
    chapters,
    grabbing: false,
    grabbed: false,
    mouse: {
      start: { x: 0, y: 0 },
      current: { x: 0, y: 0 },
    },
    angle: 0,
    dragShow: false,
    circleContainerWidth: 32,
    dragRange: {
      from: 0,
      to: 0,
    },
  }),
  computed: {
    mouseOffsetX() {
      return (this.mouse.current.x - this.mouse.start.x)
    },
    mouseOffsetY() {
      return (this.mouse.current.y - this.mouse.start.y)
    },
    onTarget() {
      if (this.angle < (Math.PI / 2) - 3) {
        return true
      }
      return false
    },
    chapter() {
      return this.$store.state.chapter
    },
  },
  components: {
    Timeline,
  },
  watch: {
    // whenever angle changes, this function will run
    angle() {
      if (this.grabbing) {
        this.scratchVideo(
          // Convert radians to the correct time in the video
          (this.dragRange.from) +
          ((-2 * this.angle * (this.dragRange.to - this.dragRange.from))
          / Math.PI))
      }
      if (this.angle > 0) {
        this.angle = 0
      }
    },
    grabbing() {
      if (this.grabbing) {
        this.video.removeEventListener('timeupdate', this.ontimeupdate)
      } else {
        this.video.addEventListener('timeupdate', this.ontimeupdate)
      }
    },
  },
  methods: {
    pauseVideo() {
      this.video.pause()
    },
    playVideo() {
      this.video.play()
    },
    grab(e) {
      if (this.grabbed === false) {
        // Initiate the starting point
        if (e.clientX || e.clientY) {
          this.mouse.start.x = e.clientX
          this.mouse.start.y = e.clientY
        } else {
          this.mouse.start.y = e.changedTouches[0].pageY
          this.mouse.start.x = e.changedTouches[0].pageX
        }
      }
      this.grabbing = true
      // Prevent resetting the initial starting point
      this.grabbed = true
      // Get the mouse movements while grabbed
      this.$el.addEventListener('mousemove', this.changeMouseInfos)
      this.$el.addEventListener('touchmove', this.changeMouseInfos)
      // Ungrab when mouseup
      this.$el.addEventListener('mouseup', this.ungrab)
      this.$el.addEventListener('mouseleave', this.ungrab)
      this.$el.addEventListener('touchend', this.ungrab)
    },
    ungrab() {
      // Stop mouse recording
      this.$el.removeEventListener('mousemove', this.changeMouseInfos)
      this.$el.removeEventListener('touchmove', this.changeMouseInfos)
      this.grabbing = false
      // Check if circle is on target
      if (this.onTarget) {
        // Go to the next chapter
        this.playVideo()
        this.resetDrag()
      }
    },
    // When scratching the div, this is where everything is updated
    changeMouseInfos(e) {
      // Set the angle
      if (isNaN(Math.asin(this.mouseOffsetY / this.circleContainerWidth))) {
        this.angle = -(Math.PI / 2)
      } else {
        this.angle = Math.asin(this.mouseOffsetY / this.circleContainerWidth)
      }
      // Set the current mouse position in realtime aka while the mouse is moving
      if (e.clientY || e.clientX) {
        this.mouse.current.y = e.clientY
        this.mouse.current.x = e.clientX
      } else {
        this.mouse.current.y = e.changedTouches[0].pageY
        this.mouse.current.x = e.changedTouches[0].pageX
      }
    },
    // Change the chapter in the store
    changeChapter(chapter) {
      this.$store.commit('changeChapter', { n: chapter })
    },
    // Drag effect over the video
    scratchVideo(at) {
      if (this.video.play()) {
        this.video.play().then(() => {
          this.video.currentTime = at
          this.video.pause()
        })
      } else {
        this.video.currentTime = at
      }
    },
    resetDrag() {
      // Reset all values
      this.dragged = false
      this.angle = 0
      this.mouse.current.x = 0
      this.mouse.current.y = 0
      this.dragShow = false
    },
  },
  mounted() {
    this.video = this.$el.querySelector('video')
    const video = this.video
    this.ontimeupdate = () => {
      chapters.forEach((chapter, index) => {
        // Wait till a new stop comes
        if (Math.floor(video.currentTime) === chapter.from) {
          this.pauseVideo()
          this.dragRange.from = chapter.from
          this.dragRange.to = chapter.to
          this.dragShow = true
        }
        // Change chapter on the timeline
        if (Math.floor(video.currentTime) === chapter.time) {
          this.changeChapter(index + 1)
        }
      })
    }
    // Chnage chapter at specific moment
    video.addEventListener('timeupdate', this.ontimeupdate)
    // When video ends, redirect to next page
    video.onended = () => {
      this.$router.push('/reveal')
    }
    // Get width of circleContainer
    this.circleContainerWidth = this.$el.querySelector('.circleContainer').offsetWidth
  },
}

</script>

<style scoped lang="scss">
@import '../variables.scss';
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.experience *{
  user-select: none;
}
.video {
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
.timeline {
  position: fixed;
  bottom: 0;
}
.circleContainer {
  position: relative;
  width: 20rem;
  height: 20rem;
  margin: auto;
  margin-top: 9rem;
  transition: .2s ease-in;
}
.circle {
  position: absolute;
  bottom: -2rem;
  right: -2rem;
  height: 4rem;
  width: 4rem;
  box-sizing: border-box;
  border : 3px solid $primary-color;
  border-radius: 50%;
  cursor: grab;
  transform-origin: -450% 50%;
  transform: rotate(0deg);
}
.landingZone {
  position: absolute;
  height: 1rem;
  width: 1rem;
  box-sizing: border-box;
  border : 3px solid $primary-color;
  border-radius: 50%;
  left: -.5rem;
  top: -.5rem;
  transition: all .3s ease-in;
}
.grow {
  height: 5rem;
  width: 5rem;
  left: -2.5rem;
  top: -2.5rem;
}
.grabbing {
  cursor: grabbing;
}
.rail path {
  stroke-width: 1px;
  stroke: $primary-color;
  fill: none;
  stroke-dasharray: 5, 2;
}
</style>
