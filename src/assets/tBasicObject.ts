
import  { Mesh, 
      BoxGeometry, 
      MeshStandardMaterial, 
      PointsMaterial,
      SphereGeometry,
      CircleGeometry, 
      PlaneGeometry,
      Object3D,
      Line,
      Points
} from "three";

import { pictureTexture } from './tTextures';

// 材质，几何的公用
const material = new MeshStandardMaterial({
  color: 'rgb(255,0,0)',
  roughness: 0.3,  //粗糙度低
  metalness: 1 // 金属度 为1  变黑，金属会吸收光，漫反射更低，所以看起来会更黑
});
const geometry = new BoxGeometry(20,20,20);

    
  // 物体
  export const box: Mesh = new Mesh(
    geometry,
    // 设置立方体的颜色
    material
  )

  export const box2: Mesh = new Mesh(
    geometry,
    // 设置立方体的颜色
    material
  )


  export const ball: Line = new Mesh(
    new SphereGeometry(5,10,10),
    new MeshStandardMaterial({color: 'rgb(255,0,0)'})
  ) 

  export const ballPoint: Line = new Points(
    new SphereGeometry(5,10,10),
    new PointsMaterial({color: 'rgb(255,0,0)'})
  ) 


  export const circle: Mesh = new Mesh(
    new CircleGeometry( 5, 32 ),
    // 设置立方体的颜色
    new MeshStandardMaterial({color: 'rgb(255,0,0)'})
  )

  box.position.x = 10;
  box2.position.x = 50;
  circle.position.x = 20;
  ballPoint.position.x = 70;


  export const stage: Mesh = new Mesh(
    new BoxGeometry(400,10,200),
    new MeshStandardMaterial({
      color: 'gray',
      roughness: 0, // 粗糙度 （镜面反射，漫反射）
  })
  )


  export const plane: Mesh = new Mesh(
    new PlaneGeometry(192,108),
    new MeshStandardMaterial(
      {map: pictureTexture}
    )
  )


  export const wall: Mesh = new Mesh(
    new BoxGeometry(600,200,10),
    new MeshStandardMaterial({
      color: 'white'
    })

  )
  
  // 位置设置
  stage.position.y = -5;
  box.position.y = 10;

  plane.position.y = 85;
  plane.position.z = -65;
  plane.scale.set(0.5,0.5,0.5);

  // 阴影相关设置
  stage.castShadow = true;
  stage.receiveShadow = true;

  box.castShadow = true;
  box.receiveShadow = true;

  export const basicObjectMeshList: Object3D[] = [];


  wall.position.y = 100;
  wall.position.z = -80;

  // 更新矩阵以及世界矩阵，适用于 spothelper重新定位 spotlight
  wall.updateMatrix();
  wall.updateMatrixWorld();
  basicObjectMeshList.push(stage, plane, wall);