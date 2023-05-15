<template>
  <div class="big-card">
    <div class="big-card__img">
      <img :src="getImg(item.img)" alt="">
    </div>
    <div class="big-card__content">
      <h2>{{ item.title }}</h2>
      <p>{{item.description}}</p>
    </div>
  </div>
</template>

<script>
import {getImg} from "@/helpers/getImg.js";

export default {
  name: "BigCard",
  methods: {getImg},
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped lang="scss">
  .big-card {
    word-wrap: break-word;
    background-clip: border-box;
    background-color: #1a2332;
    border: 1px solid rgba(0,0,0,.125);
    min-width: 0;
    text-align: center;
    position: relative;
    border-radius: 8px;
    transition: .3s ease-in-out;
    cursor: pointer;
    color: #a4b1cd;
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 4px 10px 10px rgba(0,0,0,.1);
      img {
        transform: scale(1.1);
      }
    }
    img {
      transition: .3s ease-in-out;
      margin-top: -50px;
    }

    &__content {
      padding: 16px;
    }
    h2 {
      color: #FFFFFF;
      font-weight: 900;
      margin-bottom: 20px;
    }
    p {
      font-size: 18px;
    }
  }
</style>