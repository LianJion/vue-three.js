import { 
  AxesHelper,
  GridHelper,
  PointLightHelper,
  Object3D
} from "three";

import { pointLight } from './tlights';
 

// 坐标轴
const axeshelper: AxesHelper = new AxesHelper(500)
// 网格
const gridHelper: GridHelper = new GridHelper(500, 10, 'rgb(200,200,200)', 'rgb(0,100,100)')

const pointLightHelper: PointLightHelper = new PointLightHelper(pointLight, pointLight.distance, pointLight.color);

export const helperList: Object3D[] = [];

helperList.push(axeshelper,gridHelper, pointLightHelper);
