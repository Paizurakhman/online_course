<template>
  <div class="lesson-details">
    <div class="sidebar">
      <sidebar :navs="topics" />
    </div>
    <div style="margin-left: 330px;">
      <div class="lesson-details__header">
        <p>{{ currentTopic }}</p>
        <router-link to="/lessons">Сабақтарға оралу</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import Sidebar from "@/components/molecules/sidebar/index.vue";
import {computed, ref, watchEffect} from "vue";
import SubjectsService from "@/services/subjects.service.js";

export default {
  name: "LessonDetails",
  components: {Sidebar},
  setup() {
    const router = useRouter()
    const route = useRoute()
    const { id } = route.params

    const topics = ref([])
    const currentTopic = ref('')

    const getSubjects = async () => {
      const { data } = await SubjectsService.getSubjectTopics(id)

      topics.value = data

      await router.push({ name: 'lessons-detail', params: { slug: data[0].id} })
    }

    getSubjects()

    watchEffect(() => {
      currentTopic.value = topics.value.find((item) => item.id === +route.params.slug)?.name
    })

    return { topics, currentTopic }
  }
}
</script>

<style scoped lang="scss">
.lesson-details {
  &__header {
    background: #FFFFFF;
    padding: 16px;
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #a4b1cd;
    p {
      margin-bottom: 0;
      color: #1a2332;
    }
  }
}
</style>
