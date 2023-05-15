<template>
  <span class="loader"></span>
</template>

<script>
export default {
  name: "CardSkeletonLoader"
}
</script>

<style scoped>
.loader {
  display: block;
  width: 100%;
  height: 220px;
  background:
      linear-gradient(0.25turn, transparent, #222a38, transparent),
      linear-gradient(#222a38, #222a38),
      linear-gradient(#222a38, #222a38),
      linear-gradient(#222a38, #222a38);
  background-color: #1a2332;
  background-repeat: no-repeat;
  background-size: 100% 220px, 100% 130px, 100px 15px, 150px 15px;
  background-position: -100% 0, 0 0, 15px 150px, 15px 180px;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  to {
    background-position: 215px 0, 0 0, 15px 150px, 15px 180px;
  }
}
</style>