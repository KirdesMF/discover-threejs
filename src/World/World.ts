import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { loadBirds } from './components/birds/birds';
import { createCamera } from './components/camera';
import { createLights } from './components/lights';
import { createScene } from './components/scene';
import { createControls } from './systems/controls';
import { Loop } from './systems/Loop';
import { createRenderer } from './systems/renderer';
import { Resizer } from './systems/Resizer';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export class World {
  #camera: PerspectiveCamera;
  #scene: Scene;
  #renderer: WebGLRenderer;
  #loop: Loop;
  #controls: OrbitControls;

  constructor(container: Element) {
    this.#camera = createCamera();
    this.#scene = createScene();
    this.#renderer = createRenderer();
    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);
    this.#controls = createControls(this.#camera, this.#renderer.domElement);

    container.append(this.#renderer.domElement);

    const { ambientLight, mainLight } = createLights();

    // loop and scene
    this.#loop.updatables.push(this.#controls);
    this.#scene.add(ambientLight, mainLight);

    // resize
    new Resizer(container, this.#camera, this.#renderer);
    // resizer.onResize = () => this.render();
  }

  async init() {
    const { parrot, flamingo, stork } = await loadBirds();

    this.#controls.target.copy(parrot.position);
    this.#scene.add(parrot, flamingo, stork);
    this.#loop.updatables.push(parrot, flamingo, stork);
  }

  render() {
    this.#renderer.render(this.#scene, this.#camera);
  }

  start() {
    this.#loop.start();
  }

  stop() {
    this.#loop.stop();
  }
}
