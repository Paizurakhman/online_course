<template>
  <app-layout>
    <router-view />
  </app-layout>
</template>

<script>
import {defineComponent} from "vue";
import AppLayout from "@/layouts/AppLayout.vue";

export default defineComponent({
  components: {AppLayout}
})
</script>

<style scoped>

</style>
