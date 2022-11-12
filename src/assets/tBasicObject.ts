
import  { Mesh, 
      BoxBufferGeometry, 
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
const geometry = new BoxBufferGeometry(10,10,10);

    
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


  export const ball: Line = new Line(
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


  export const basicObjectMeshList: Object3D[] = [];

  basicObjectMeshList.push(box,box2,circle,ball,ballPoint);