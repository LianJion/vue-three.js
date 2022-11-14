import  { 
  Scene, 
  WebGLRenderer, 
  PerspectiveCamera, 
  HTMLElement,
  Vector3,
  // AmbientLight,
  Object3D,
} from "three";

import Stats from 'three/examples/jsm/libs/stats.module';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';




export class TEngine {

  // 私有属性
  private dom: HTMLElement
  private renderer: WebGLRenderer
  private scene: Scene
  private camera: PerspectiveCamera

  // 构造函数
  constructor(dom: HTMLElement) {
    this.dom = dom;

    // 渲染器
    this.renderer = new WebGLRenderer({
      // 抗锯齿数
      antiAlias:true 
    })

    // 渲染器 shadowMap 开启阴影
    this.renderer.shadowMap.enabled = true;

    this.renderer.setSize(dom.offsetWidth,dom.offsetHeight ,true);



    // 场景
    this.scene = new Scene()

    // 相机
    this.camera = new PerspectiveCamera(45, dom.offsetWidth/dom.offsetHeight, 1, 1000)
    this.camera.position.set(20,500,20);
    this.camera.lookAt(new Vector3(0,0,0));
    this.camera.up = new Vector3(0,1,0);

    // 灯光 打一个白色的灯光
    // const ambientLight: AmbientLight = new AmbientLight('rgb(255,255,255)', 1);

   
    
  
    // 设置背景颜色
    this.renderer.setClearColor('rgb(255,255,255)');
    this.renderer.clearColor();

    // 初始性能监视
    const stats = Stats();
    const statsDom = stats.domElement;
    statsDom.style.position = 'fixed';
    statsDom.style.top = '0';
    statsDom.style.right = '5px';
    statsDom.style.left = 'unset';

    // 初始轨道交互器
    const orbitControls: OrbitControls = new OrbitControls(this.camera, this.renderer.domElement);
    orbitControls.autoRotate = true;

    
    // 渲染场景
    const renderFun = () => {
      this.renderer.render(this.scene,this.camera)
      // 轨道交互器改变
      // orbitControls.update();
      // 性能监视器
      // stats.update();
      // 动画刷新
      requestAnimationFrame(renderFun);
    }

    renderFun();

    // 添加渲染节点
    dom.appendChild(this.renderer.domElement)
    dom.appendChild(statsDom);
  }

  // 自定义函数
  addObject(object: Object3D[]) {
    object.forEach(element => {
      this.scene.add(element)
    });
  }

  // 引入 gltf模型,DRACOLoader压缩模型
  setModel() {
    const gltfLoader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath( 'three/examples/js/libs/draco/' );
    gltfLoader.setDRACOLoader( dracoLoader );
    gltfLoader.load('src/assets/molang.gltf', (gltf: { scene: any; }) =>{
      const scale = .01;
      gltf.scene.scale.set(scale,scale,scale);
      this.scene.add(gltf.scene)

      gltf.scene.position.z = 20;
      gltf.scene.position.x = 0;
      gltf.scene.position.y = 10;
    })
  }

}