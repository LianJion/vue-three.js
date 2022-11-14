import {
  AmbientLight,
  PointLight,
  Object3D,
  SpotLight

}  from 'three';

import { wall } from './tBasicObject';

// 环境光 参数 色值，强度
const ambientLight: AmbientLight = new AmbientLight('rgb(255,255,255)', 0.3);

// 点光
export const pointLight: PointLight = new PointLight('rgb(255,255,255)', 0.7, 200, 0.1);


const angelChange = Math.PI/180;
export const spotLight: SpotLight = new SpotLight('rgb(255,255,255)', 1, 200, angelChange * 30, 0, 0)

// pointLight.position.set(30, 20, 20);

spotLight.position.set(-50, 100, 200);
spotLight.castShadow = true;
// 聚光灯的 目标直接设置为对象
spotLight.target = wall;

// 产生阴影的关键， 渲染器 阴影开启， 灯光，物体 castShadow 开启， 场地接受阴影开启。


// 最终颜色值 =  单体设置颜色值 与 环境 颜色值 * 强度 乘积  转换成 0 - 1， 进行乘积 
export const basicLightList: Object3D[] = [];

basicLightList.push(ambientLight, spotLight);