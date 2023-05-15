<template>
  <div>
    <main-section/>
    <section id="about" class="container">
      <div class="row">
        <div
            class="col-md-5 d-flex justify-content-between mb-4 px-4"
            :class="{ ' offset-md-1': i === 0 }"
            v-for="(item, i) in aboutItems"
            :key="item.id"
        >
          <big-card :item="item" />
        </div>
      </div>
    </section>
    <info-section />
  </div>
</template>

<script>

import MainSection from "@/components/organisms/main/main-section/index.vue";
import BigCard from "@/components/molecules/card/big-card/index.vue";
import InfoSection from "@/components/organisms/main/info-section/index.vue";

export default {
  name: "MainView",
  components: {InfoSection, BigCard, MainSection},
  setup() {
    const aboutItems = [
      {
        id: 1,
        title: 'OLearn сертификатын алыңыз',
        description: 'Түйіндемеңізді аспанға шығарыңыз. Армандаған жұмысқа орналасыңыз. Бәсекелестіктен ерекшеленіңіз.',
        img: 'certificate.png'
      },
      {
        id: 2,
        title: 'Жаңа дағдыларды меңгеру',
        description: 'Шеберлік жолдарымен танымал шабуыл және қорғаныс қауіпсіздік техникасын үйреніңіз.',
        img: 'skills.png'
      },
    ]

    return { aboutItems }
  }
}
</script>

<style scoped lang="scss">
  #about {
    margin-top: 30px;
  }
</style>
