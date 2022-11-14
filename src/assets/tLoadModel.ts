import { MeshStandardMaterial } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { frameColorTexture, frameRoughnessTexture, frameDisplacementTexture } from './tTextures';

// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

// ts写法
const objLoader:OBJLoader = new OBJLoader();
// const mtlLoader:MTLLoader = new MTLLoader();
// 
export const framePromise = objLoader.loadAsync('src/assets/three.obj');

// export const framePromise = new Promise<Group>((resolve, reject) => {
//   mtlLoader.loadAsync('src/assets/three.mtl').then((materialCreator: any) => {
//     objLoader
//     .setMaterials(materialCreator)
//     .loadAsync('src/assets/three.obj')
//     .then((group: unknown) => {
//       resolve(group)
//     }).catch((err: any) => {
//       reject(err);
//     })
//   }).catch( (err: any) => {
//     reject(err);
//   })
// })


export const frameMaterial:MeshStandardMaterial = new MeshStandardMaterial(
 {
  map: frameColorTexture,
  roughnessMap: frameRoughnessTexture,
  bumpMap: frameDisplacementTexture
 } 
);

