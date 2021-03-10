<template>
  <div class="app-loader">
    <div class="loader">
      <span>{</span><span>}</span>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">

.app-loader {
  position: fixed;
  top: 38%;
  left: 38.5%;
  z-index: 100;
  @media (min-width: 380px) {
    left: 41%
  }
  @media (min-width: 430px) {
    left: 42%
  }
  @media (min-width: 555px) {
    left: 44%
  }
  @media (min-width: 705px) {
    left: 45%
  }
  @media (min-width: 899px) {
    left: 47%
  }
  @media (min-width: 1400px) {
    left: 47.5%
  }
}
.loader {
  color: #29B6F6;

  font-family: Consolas, Menlo, Monaco, monospace;
  font-weight: bold;
  font-size: 4rem;

  opacity: 0.8;

span {
  display: inline-block;
  animation: pulse 0.4s alternate infinite ease-in-out;

&:nth-child(odd) {
   animation-delay: 0.4s;
 }
}
}

@keyframes pulse {
  to {
    transform: scale(0.8);
    opacity: 0.5;
  }
}
</style>
