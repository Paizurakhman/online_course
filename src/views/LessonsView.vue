<template>
  <div class="container">
    <div class="page-title">Барлық сабақтар</div>
    <div class="row" v-if="isLoading">
      <div class="col-md-3 mt-4" v-for="i in 4" :key="i">
        <card-skeleton-loader />
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-xl-3 mt-4" v-for="subject in subjects" :key="subject.id">
        <router-link :to="{ name: 'lessons-id', params: {id: subject.id}}">
          <course-card :subject="subject"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CourseCard from "@/components/molecules/card/course/index.vue";
import {ref} from "vue";
import SubjectsService from "@/services/subjects.service";
import CardSkeletonLoader from "@/components/atoms/skeleton-card-loader/index.vue";

export default {
  name: "LessonsView",
  components: {CardSkeletonLoader, CourseCard},
  setup() {
    const subjects = ref([])
    const isLoading = ref(false)

    const getSubjects = async () => {
      isLoading.value = true
      const { data } = await SubjectsService.getSubjects()

      subjects.value = data
      isLoading.value = false
    }

    getSubjects()

    return { subjects, isLoading }
  }
}
</script>

<style scoped lang="scss">
.row {
  margin-bottom: 20px;
}
</style>
