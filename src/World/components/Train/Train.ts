import { Group, MathUtils, Mesh } from 'three';
import { createMeshes } from './meshes';

const wheelSpeed = MathUtils.degToRad(60);

export class Train extends Group {
  meshes: Record<string, Mesh>; //FIXME for now

  constructor() {
    super();
    this.meshes = createMeshes();

    Object.values(this.meshes).forEach((mesh) => this.add(mesh));
  }

  tick(delta: number) {
    this.meshes.bigWheel.rotation.y += wheelSpeed * delta;
    this.meshes.smallWheelRear.rotation.y += wheelSpeed * delta;
    this.meshes.smallWheelCenter.rotation.y += wheelSpeed * delta;
    this.meshes.smallWheelFront.rotation.y += wheelSpeed * delta;
  }
}
