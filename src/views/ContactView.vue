<template>
  <div class="contact-us">
    <div class="container">
      <div class="page-title">Бізбен байланысу</div>
      <form>
        <h2>Кері байланыс</h2>
        <input-field placeholder="Аты" />
        <input-field placeholder="Email" />
        <input-field placeholder="Тақырып" />
        <textarea placeholder="Хабар" />
        <base-button>Жіберу</base-button>
      </form>
    </div>
  </div>
</template>

<script>
import InputField from "@/components/atoms/input-field/index.vue";
import BaseButton from "@/components/atoms/base-button/index.vue";

export default {
  name: "ContactView",
  components: {BaseButton, InputField}
}
</script>

<style scoped lang="scss">

.contact-us {
  .page-title {
    margin: 0 0 20px;
  }
  form {
    max-width: 480px;
    margin: 60px auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
    h2 {
      text-align: center;
    }
  }
}
</style>
