<template>
  <div>
    <div class="lesson-content">
      <div class="lesson-content__loader" v-if="isLoading" >
        <lock-loader />
      </div>
      <div v-else>
        <div v-if="contents.animation">
          <component :is="contents.animation" />
        </div>
        <div v-html="contents.content" v-else></div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, watchEffect} from "vue";
import SubjectsService from "@/services/subjects.service.js";
import {useRoute} from "vue-router";
import Animation_1 from "@/components/organisms/animations/animation_1/index.vue";
import Animation_2 from "@/components/organisms/animations/animation_2/index.vue";
import Animation_3 from "@/components/organisms/animations/animation_3/index.vue";
import LockLoader from "@/components/atoms/lock-loader/index.vue";

export default {
  name: "LessonSlug",
  components: {LockLoader, Animation_3, Animation_2, Animation_1},
  setup() {
    const contents = ref({})
    const route = useRoute()
    const isLoading = ref(false)
    const getSubjects = async (id) => {
      isLoading.value = true
      const { data } = await SubjectsService.getTopicContents(id)

      contents.value = data
      isLoading.value = false

    }

    watchEffect(() => {
      getSubjects(route.params.slug)
    })

    return { contents, isLoading }
  }
}
</script>

<style scoped lang="scss">
.lesson-content {
  background: #fff;
  padding: 32px 16px;
  min-height: calc(100vh - 56px);
  position: relative;
  &__loader {
    left: 0;
    top: 0;
    background-color: #1a2332;
    width: 100%;
    height: 100%;
    position: absolute;
    display: grid;
    place-content: center;
  }
}
</style>
