<template>
  <section id="info-section" class="container">
    <h2>Неліктен OLearn</h2>
    <p>Интерактивті, жетекші оқыту және салалық сертификаттар арқылы нарықтағы мамандықта болашағыңызға дайындалыңыз. Бәсекелестіктен ерекшелену үшін қажетті дағдыларды үйреніңіз.</p>
    <div class="info-section-cards">
      <div class="row">
        <div class="col-md-4 mb-4 px-4" v-for="(item, i) in infoConfig" :key="i">
          <info-card :item="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import InfoCard from "@/components/molecules/card/info/index.vue";

export default {
  name: "InfoSection",
  components: {InfoCard},
  setup() {
    const infoConfig = [
      {
        icon: 'fa-regular fa-compass',
        title: 'Жетекші курстар',
        subtitle: 'Бастауыштан жоғары деңгейге дейін әрбір дағды деңгейі үшін',
        back: [
          'Қауіптен хабардар оқыту тәсілі',
          'Нақты әлем мысалдары',
          'Дағдыларды бағалау жаттығулары',
          'Дискордқа негізделген нұсқаулық',
        ]
      },
      {
        icon: 'fa-solid fa-display',
        title: 'Браузердегі Pentesting VM',
        subtitle: 'Барлық зертханалық жаттығуларды браузеріңізден орындаңыз',
        back: [
          'Сіз үйренген барлық нәрсені тәжірибеде қолдану үшін браузердегі пентестинг VM (Pwnbox).',
          'Инфрақұрылым немесе құрал талаптары жоқ',
        ]
      },
      {
        icon: 'fa-regular fa-hand-pointer',
        title: 'Жоғары практикалық',
        subtitle: 'Нақты әлемде тәжірибе жасаңыз',
        back: [
          'Нақты әлемдегі қолданбалар мен инфрақұрылымға қарсы интерактивті жаттығулар',
          'Қолданбалы құнды тәжірибе алыңыз',
        ]
      },
      {
        icon: 'fa-solid fa-medal',
        title: 'Сертификат алыңыз',
        subtitle: 'Жұмыс нарығында ерекшеленіңіз, түйіндемеңізді жоғарылатыңыз',
        back: [
          'Өнеркәсіпте мойындалған сертификаттар',
          'Нақты келісімдерді имитациялайтын шынайы емтихандар',
          'Өту үшін коммерциялық деңгейдегі есеп қажет',
        ]
      },
      {
        icon: 'fa-solid fa-globe',
        title: 'Шексіз және онлайн',
        subtitle: 'Кез келген жерден сұраныс бойынша қол жеткізу',
        back: [
          'Шағын, оңай қорытылатын курстар Интернетте қолжетімді',
          'Аяқталған курстарға өмір бойы қол жеткізу',
        ]
      },
      {
        icon: 'fa-solid fa-briefcase',
        title: 'Жұмыс және шеберлік жолдары',
        subtitle: 'Жұмыс шеберлігіне қол жеткізіңіз немесе жаңа дағдыларды үйреніңіз',
        back: [
          'Жұмысты немесе біліктілікті алыңыз',
          'Қораптан тыс ойлау менталитетін дамыту',
        ]
      }
    ]

    return {infoConfig}
  }
}
</script>

<style scoped lang="scss">
#info-section {
  text-align: center;
  background-clip: border-box;
  background-color: #1a2332;
  border: 1px solid rgba(0, 0, 0, .125);
  min-width: 0;
  position: relative;
  border-radius: 8px;
  transition: .3s ease-in-out;
  padding: 24px;
  margin-top: 30px;
  margin-bottom: 30px;

  h2 {
    color: #FFFFFF;
    font-weight: 900;
    margin-bottom: 20px;
    font-size: 36px;
  }

  p {
    font-size: 18px;
    max-width: 650px;
    margin: auto;
  }

  .info-section-cards {
    margin-top: 60px;
  }
}
</style>
