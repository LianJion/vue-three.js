import { MeshStandardMaterial, Material,Mesh, Group } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { frameColorTexture, frameRoughnessTexture, frameDisplacementTexture } from './tTextures';

// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

// ts写法
const objLoader:OBJLoader = new OBJLoader();
// const mtlLoader:MTLLoader = new MTLLoader();
// 

// 直接用promise 处理异步返回对象 学习啊
 const framePromise = new Promise<Mesh | null>((resolve, reject) => {
    objLoader.loadAsync('src/assets/three.obj').then(group => {
      const frame: Mesh = group.children[0] as Mesh
      (frame.material as Material).dispose();
      frame.material = new MeshStandardMaterial({
        map: frameColorTexture,
        roughnessMap: frameRoughnessTexture,
        bumpMap: frameDisplacementTexture // displacementMap 以顶点为准，而bump是凹凸
      })

      frame.position.z = -5;
      frame.position.y = 45;
      frame.rotation.y = Math.PI/180 * 90;
      frame.scale.set(3,3,3);
      resolve(frame);
    }).catch( (err: any) => {
        reject(err);
    })
})

// 使用 async await 来优化代码

export const getFrame = async function(): Promise<Mesh|null> {
    const group = await objLoader.loadAsync('src/assets/three.obj');
    if (group instanceof Group) {
        const frame: Mesh = group.children[0] as Mesh;
        (frame.material as Material).dispose();

        // 贴图
        frame.material = new MeshStandardMaterial({
            map: frameColorTexture,
            roughnessMap: frameRoughnessTexture,
            bumpMap: frameDisplacementTexture // displacementMap 以顶点为准，而bump是凹凸
        })
        frame.position.z = -5;
        frame.position.y = 45;
        frame.rotation.y = Math.PI/180 * 90;
        frame.scale.set(3,3,3);

        return frame
    } else {
        console.error(group);
        return null;
    }
}