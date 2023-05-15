<template>
  <div id="particles-js"></div>
</template>

<script setup>
import {onMounted} from "vue";

onMounted(() => {
  particlesJS("particles-js", {
    particles: {
      number: { value: 100, density: { enable: false, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "star",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: {
          src:
              "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 4,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 14,
        direction: "left",
        random: false,
        straight: true,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 200, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });

})
</script>

<style scoped lang="scss">
canvas {
  display: block;
  vertical-align: bottom;
}
#particles-js {
  top: 0;
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #111927;
  background-image: url("https://www.inboxarmy.com/wp-content/uploads/2020/11/Email-Marketing-for-Online-Courses-Crop-.gif");
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: 0 bottom;
  z-index: -1;
} /* ---- stats.js ---- */
.count-particles {
  background: #000022;
  position: absolute;
  top: 48px;
  left: 0;
  width: 80px;
  color: #13e8e9;
  font-size: 0.8em;
  text-align: left;
  text-indent: 4px;
  line-height: 14px;
  padding-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
}
.js-count-particles {
  font-size: 1.1em;
}
#stats,
.count-particles {
  -webkit-user-select: none;
  margin-top: 5px;
  margin-left: 5px;
}
#stats {
  border-radius: 3px 3px 0 0;
  overflow: hidden;
}
.count-particles {
  border-radius: 0 0 3px 3px;
}
</style>
