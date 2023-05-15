<template>
  <div class="default-layout">
    <header-nav />
    <div class="default-layout__content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">

import HeaderNav from "../components/organisms/header/index.vue";
import Footer from "../components/organisms/footer/index.vue";

export default {
  name: "AppLayoutDefault",
  components: {Footer, HeaderNav},
}
</script>

<style scoped lang="scss">
.default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  &__content {
    flex: 1;
    padding: 30px 0;
  }
}
</style>
