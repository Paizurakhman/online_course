<template>
  <div class="info-card">
    <div class="info-card__inner">
      <div class="info-card__inner-front">
        <div class="info-card__icon">
          <i :class="item.icon" style="font-size: 32px"></i>
        </div>
        <h4>{{ item.title }}</h4>
        <p>{{item.subtitle}}</p>
      </div>
      <div class="info-card__inner-back">
        <ul>
          <li v-for="(back, i) in item.back" :key="i">{{back}}</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped lang="scss">
  .info-card {
    border: 1px solid #263042;
    border-radius: 8px;
    background-color: transparent;
    word-wrap: break-word;
    background-clip: border-box;
    flex-direction: column;
    min-width: 0;
    position: relative;
    transition: .3s ease-in-out;
    cursor: pointer;
    padding: 30px 16px;
    $self: &;
    &:hover {
      background-color: #FFFFFF;
      #{$self}__inner {
        transform: rotateY(180deg);
      }
    }
    &__inner {
      position: relative;
      transform-style: preserve-3d;
      transition: .6s ease-in-out;
      height: 200px;
      text-align: center;
      &-front {
        backface-visibility: hidden;
        height: 100%;
        width: 100%;
        position: absolute;
        transition: all .3s ease-in-out;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      &-back {
        backface-visibility: hidden;
        height: 100%;
        width: 100%;
        transform: rotateY(180deg);
        transition: .3s ease-in-out;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #1a2332;
      }
    }
    h4, i{
      color: #FFFFFF;
    }
    h4 {
      font-size: 24px;
      font-weight: 700;
      margin: 16px 0;
    }
    ul {
      li:before {
        content: "-";
        font-size: 16px;
        margin-right: 5px;
      }
    }
  }
</style>