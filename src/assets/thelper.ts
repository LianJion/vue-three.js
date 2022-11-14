import { 
  AxesHelper,
  GridHelper,
  PointLightHelper,
  Object3D,
  SpotLightHelper
} from "three";

import { pointLight, spotLight } from './tlights';
 

// 坐标轴
const axeshelper: AxesHelper = new AxesHelper(500)
// 网格
const gridHelper: GridHelper = new GridHelper(500, 10, 'rgb(200,200,200)', 'rgb(0,100,100)')

const pointLightHelper: PointLightHelper = new PointLightHelper(pointLight, pointLight.distance, pointLight.color);

const spotLightHelper: SpotLightHelper = new SpotLightHelper(spotLight, spotLight.distance,spotLight.color)
export const helperList: Object3D[] = [];

helperList.push(axeshelper, spotLightHelper);
