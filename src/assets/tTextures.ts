import { texture, TextureLoader } from 'three';

const textureLoader: TextureLoader = new TextureLoader();
export const pictureTexture: texture = textureLoader.load('./public/102.jpg');

export const frameRoughnessTexture = textureLoader.load('src/assets/WoodFloor051_1K_Color.jpg')
export const frameColorTexture = textureLoader.load('src/assets/WoodFloor051_1K_Color.jpg')
export const frameDisplacementTexture = textureLoader.load('src/assets/WoodFloor051_1K_Displacement.jpg')