<template>
  <div class="menubarrara" @click="alternarMenu">
    <div :class="['barra', { 'active': menuVisivel }]" style="margin-top: 15px;"></div>
    <div :class="['barra', { 'active': menuVisivel }]"></div>
    <div :class="['barra', { 'active': menuVisivel }]"></div>
  </div>
</template>

<script>

export default {
  props: {
    menuVisivel: {
      type: Boolean,
      required: true,
    },
    alternarMenu: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
.menubarrara {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 8px;
  cursor: pointer;
  z-index: 2;
  background-color: #fff;
}

.barra {
  display: block;
  width: 30px;
  height: 3px;
  margin: 6px auto;
  background-color: #3888ff;
  transition: all 0.3s ease;
}

/* Primeira barra */
.barra.active:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

/* Segunda barra */
.barra.active:nth-child(2) {
  opacity: 0;
}

/* Terceira barra */
.barra.active:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}
</style>