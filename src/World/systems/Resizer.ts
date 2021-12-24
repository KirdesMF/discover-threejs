import { PerspectiveCamera, WebGLRenderer } from 'three';

function setSize(
  container: Element,
  camera: PerspectiveCamera,
  renderer: WebGLRenderer
) {
  // camera aspect ratio
  camera.aspect = container.clientWidth / container.clientHeight;

  // update camera frustum
  camera.updateProjectionMatrix();

  // update renderer size and canvas
  renderer.setSize(container.clientWidth, container.clientHeight);

  // set pixel ratio (mobile devices)
  renderer.setPixelRatio(window.devicePixelRatio);
}

export class Resizer {
  constructor(
    container: Element,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer
  ) {
    setSize(container, camera, renderer);

    const resizeObserver = new ResizeObserver(() => {
      setSize(container, camera, renderer);
      this.onResize();
    });

    resizeObserver.observe(container);
  }

  onResize() {}
}
