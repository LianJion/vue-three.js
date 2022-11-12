
import  { Mesh, BoxBufferGeometry, MeshStandardMaterial, CircleGeometry, Object3D} from "three";

    
  // 物体
  export const box: Mesh = new Mesh(
    new BoxBufferGeometry(10,10,10),
    // 设置立方体的颜色
    new MeshStandardMaterial({color: 'rgb(255,0,0)'})
  )

  export const box2: Mesh = new Mesh(
    new BoxBufferGeometry(10,10,10),
    // 设置立方体的颜色
    new MeshStandardMaterial({color: 'rgb(255,0,0)'})
  )


  export const circle: Mesh = new Mesh(
    new CircleGeometry( 5, 32 ),
    // 设置立方体的颜色
    new MeshStandardMaterial({color: 'rgb(255,0,0)'})
  )

  box.position.x = 10;
  box2.position.x = 50;
  circle.position.x = 20;


  export const basicObjectMeshList: Object3D[] = [];

  basicObjectMeshList.push(box,box2,circle);