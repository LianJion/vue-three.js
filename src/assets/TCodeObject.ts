import { BufferGeometry, Mesh, MeshStandardMaterial, Object3D } from 'three';

const geometry: BufferGeometry =  new BufferGeometry();
const material: MeshStandardMaterial = new MeshStandardMaterial();
const codeBox: Mesh = new Mesh(geometry, material);

export const codeModeList: Object3D[] = [];

codeModeList.push(codeBox);


