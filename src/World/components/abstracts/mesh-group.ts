import {
  Group,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  SphereGeometry,
} from 'three';

export function createMeshGroup() {
  const group = new Group();
  const geometry = new SphereGeometry(0.25, 16, 16);
  const material = new MeshStandardMaterial({ color: 'indigo' });
  const sphere = new Mesh(geometry, material);
  const radiansPerSecond = MathUtils.degToRad(30);

  group.add(sphere);

  for (let i = 0; i < 1; i += 0.005) {
    const clonedSphere = sphere.clone();

    clonedSphere.position.x = Math.cos(2 * Math.PI * i);
    clonedSphere.position.y = Math.sin(2 * Math.PI * i);
    clonedSphere.scale.multiplyScalar(0.01 + i);

    group.add(clonedSphere);
  }

  group.tick = (delta: number) => {
    group.rotation.z -= delta * radiansPerSecond;
  };

  return group;
}
