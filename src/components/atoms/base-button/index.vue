<template>
  <component
    :class="['a-button', `a-button__${variant}`, `a-button_size_${size}`]"
    :is="tag"
    :to="url"
    v-bind="$attrs"
    :disabled="isLoading"
  >
    <loader v-if="isLoading" :size="size" />
    <slot v-else></slot>
  </component>
</template>

<script lang="ts">
import Loader from "@/components/atoms/loader/index.vue"
export default {
  inheritAttrs: false,
  name: "BaseButton",
  components: { Loader },
  props: {
    variant: {
      type: String,
      default: "primary",
      validator: (value) =>
        [
          "primary",
          "error",
          "primary_outlined",
          "white",
          "white_outlined",
          "text",
          "secondary", "success"].indexOf(value) !== -1
    },
    size: {
      type: String,
      default: "lg",
      validator: (value) => ["lg", "md", "sm", "full"].indexOf(value) !== -1
    },
    url: {
      type: [String, Object],
      default: ""
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "button"
    }
  }
}
</script>

<style lang="scss" scoped src="./index.scss" />
