import {
  BoxBufferGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  TextureLoader,
} from 'three';

function createMaterial() {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load(
    '/assets/textures/d9dxw7l-042d1fe1-49fc-4317-b46a-f9281c2b66c2.png'
  );
  const material = new MeshStandardMaterial({
    map: texture,
    roughness: 0.5,
    metalness: 0.5,
  });

  return material;
}

export function createCube() {
  const geometry = new BoxBufferGeometry(1, 1, 1); // geometry
  const material = createMaterial(); // material
  const cube = new Mesh(geometry, material); // mesh
  const radiansPerSecond = MathUtils.degToRad(30);

  cube.rotation.set(-0.5, -0.1, 0.5);

  cube.tick = (delta: number) => {
    // increase the cube's rotation each frame
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}
