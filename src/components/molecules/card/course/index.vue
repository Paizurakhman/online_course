<template>
  <div class="course-card">
    <div class="course-card__img">
      <img :src="image" alt="image">
    </div>
    <div class="course-card__content">
      <div class="course-card__title">{{ subject.name }}</div>
      <div class="course-card__subtitle">{{ subject.description }}</div>
    </div>
  </div>
</template>

<script>
import {computed} from "vue";

export default {
  name: "CourseCard",
  props: {
    subject: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const image = computed(() => import.meta.env.VITE_BASE_URL + props.subject.image)

    return { image }
  }
}
</script>

<style scoped lang="scss">
.course-card {
  word-wrap: break-word;
  background-clip: border-box;
  background-color: #1a2332;
  border: 1px solid rgba(0,0,0,.125);
  display: flex;
  flex-direction: column;
  min-width: 0;
  position: relative;
  border-radius: 4px;
  transition: .3s ease-in-out;
  cursor: pointer;
  color: #a4b1cd;
  &__img {
    display: grid;
    place-content: center;
    img {
      max-width: 100%;
      height: 150px;
      object-fit: cover;
      object-position: center;
    }
  }
  &__title {
    color: #FFFFFF;
  }
  &__subtitle {
    font-size: 14px;
    line-height: 20px;
    margin-top: 16px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    white-space: pre-wrap;
  }
  &__content {
    padding: 16px;
  }
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 10px 10px rgba(0,0,0,.1);
  }
}
</style>