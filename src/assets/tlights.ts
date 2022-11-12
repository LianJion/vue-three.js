import {
  AmbientLight,
  PointLight,
  Object3D

}  from 'three';

// 环境光 参数 色值，强度
const ambientLight: AmbientLight = new AmbientLight('rgb(255,255,255)', 0.3);

// 点光
export const pointLight: PointLight = new PointLight('rgb(255,0,0)', 0.7, 200, 0.1);


pointLight.position.set(30, 20, 20);

// 最终颜色值 =  单体设置颜色值 与 环境 颜色值 * 强度 乘积  转换成 0 - 1， 进行乘积 
export const basicLightList: Object3D[] = [];

basicLightList.push(ambientLight, pointLight);