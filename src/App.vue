

<template>
  <div class="three-canvas" ref="threeTarget"></div>
</template>

<script setup lang="ts">

  import {ref, onMounted } from 'vue';
  import { TEngine } from './assets/tEngine';
  import { basicObjectMeshList } from './assets/tBasicObject';
  import { basicLightList } from './assets/tlights';
  
  import { helperList } from './assets/thelper';

  import { framePromise, frameMaterial } from './assets/tLoadModel';

  import { Mesh,Material } from 'three';
  
  // import { TCanvasTextureEditor } from './assets/TCanvasTextureEditor';

  const threeTarget = ref(null);

  onMounted(() => {
    const TE = new TEngine(threeTarget.value);
    TE.addObject(basicObjectMeshList);
    TE.addObject(basicLightList);
    TE.addObject(helperList);

    // TE.setModel();

    // const textCanvase = new TCanvasTextureEditor();
   
    // textCanvase.draw(ctx => {
    //   // ctx.beginPath();
    //   ctx.rect(10,10,200,200);
    //   ctx.strokeStyle = 'red';
    //   ctx.stroke();
    //   ctx.fillStyle= 'blue';
    //   ctx.fill();
    //   // ctx.closePath();
    // }).preview();

    framePromise.then((group) =>{
      const frameMesh: Mesh = group.children[0] as Mesh;
      (frameMesh.material as Material).dispose();
      frameMesh.material = frameMaterial;
      group.position.z = -5;
      group.position.y = 45;
      group.rotation.y = Math.PI/180 * 90;
      group.scale.set(3,3,3);
      TE.addObject([group]);
    })

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
