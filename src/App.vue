

<template>
  <div class="three-canvas" ref="threeTarget"></div>
</template>

<script setup lang="ts">

  import {ref, onMounted } from 'vue';
  import { TEngine } from './assets/tEngine';
  import { basicObjectMeshList } from './assets/tBasicObject';

  const threeTarget = ref(null);

  onMounted(() => {
    const TE = new TEngine(threeTarget.value);
    TE.addObject(basicObjectMeshList);
    TE.setModel();
  });

</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.three-canvas {
  width: 100%;
  height: 100%;
}

</style>
