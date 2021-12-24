import { Mesh } from 'three';
import { createGeometries } from './geometries';
import { createMaterials } from './materials';

export function createMeshes() {
  const geometries = createGeometries();
  const materials = createMaterials();

  // cabin
  const cabin = new Mesh(geometries.cabin, materials.body);
  cabin.position.set(1.5, 1.4, 0);

  // chimney
  const chimney = new Mesh(geometries.chimney, materials.body);
  chimney.position.set(-2, 1.9, 0);

  // nose
  const nose = new Mesh(geometries.nose, materials.detail);
  nose.position.set(-1, 1, 0);
  nose.rotation.z = Math.PI / 2;

  // small wheel
  const smallWheelRear = new Mesh(geometries.wheel, materials.detail);
  smallWheelRear.position.y = 0.5;
  smallWheelRear.rotation.x = Math.PI / 2;

  // small wheel center
  const smallWheelCenter = smallWheelRear.clone();
  smallWheelCenter.position.x = -1;

  // small wheel front
  const smallWheelFront = smallWheelRear.clone();
  smallWheelFront.position.x = -2;

  // big wheel
  const bigWheel = smallWheelRear.clone();
  bigWheel.position.set(1.5, 0.9, 0);
  bigWheel.scale.set(2, 1.25, 2);

  return {
    cabin,
    chimney,
    nose,
    smallWheelRear,
    smallWheelCenter,
    smallWheelFront,
    bigWheel,
  };
}
