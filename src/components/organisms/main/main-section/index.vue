<template>
  <div class="main-section">
<!--    <particles/>-->
    <div class="main-section__info">
      <div class="container">
        <h1>
          Сіздің онлайн сабаққа сапарыңыз осы жерден басталады.
        </h1>
        <p>
          Бағытталған оқыту арқылы дағдыларыңызды дамытыңыз және салалық сертификаттармен тәжірибеңізді дәлелдеңіз. Нарыққа дайын кәсіпқой болыңыз.
        </p>
        <base-button>Қазір бастаңыз</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import Particles from "@/components/organisms/particles/index.vue";
import BaseButton from "@/components/atoms/base-button/index.vue";

export default {
  name: "MainSection",
  components: {BaseButton, Particles}

}
</script>

<style scoped lang="scss">
.main-section {
  height: 80vh;
  background: url("https://www.learnupon.com/wp-content/uploads/@2x-Blog-Technical-Skills-animation.gif");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  //background-attachment: fixed;
  position: relative;

  &__info {
    position: absolute;
    top: 0;
    background: rgba(0,0,0,0.5);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;

    h1 {
      font-size: 4rem;
      max-width: 1080px;
      margin: 0 auto;
      font-weight: 900;
      color: #FFFFFF;

    }

    p {
      max-width: 1000px;
      margin: 30px auto;
      font-size: 1.5rem;
    }
  }
}
</style>
