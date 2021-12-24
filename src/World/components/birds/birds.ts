import { AnimationMixer } from 'three';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

function setupModel(data: GLTF) {
  const model = data.scene.children[0];
  const clip = data.animations[0];
  const mixer = new AnimationMixer(model);
  const action = mixer.clipAction(clip);

  action.play();

  model.tick = (delta: number) => mixer.update(delta);

  return model;
}

export async function loadBirds() {
  const loader = new GLTFLoader();

  const [parrotData, flamingoData, storkData] = await Promise.all([
    loader.loadAsync('/assets/models/Parrot.glb'),
    loader.loadAsync('/assets/models/Flamingo.glb'),
    loader.loadAsync('/assets/models/Stork.glb'),
  ]);

  const parrot = setupModel(parrotData);
  parrot.position.set(0, 0, 2.5);

  const flamingo = setupModel(flamingoData);
  flamingo.position.set(7.5, 0, -10);

  const stork = setupModel(storkData);
  stork.position.set(0, -2.5, -10);

  return { parrot, flamingo, stork };
}
