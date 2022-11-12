
import  { Mesh, 
      BoxGeometry, 
      MeshStandardMaterial, 
      PointsMaterial,
      SphereGeometry,
      CircleGeometry, 
      Object3D,
      Line,
      Points
} from "three";


// 材质，几何的公用
const material = new MeshStandardMaterial({color: 'rgb(255,0,0)'});
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
    new BoxGeometry(200,10,200),
    new MeshStandardMaterial({color: 'gray'})
  )

  
  // 位置设置
  stage.position.y = -5;
  box.position.y = 10;


  // 阴影相关设置
  stage.castShadow = true;
  stage.receiveShadow = true;

  box.castShadow = true;
  box.receiveShadow = true;

  export const basicObjectMeshList: Object3D[] = [];

  basicObjectMeshList.push(box,stage);