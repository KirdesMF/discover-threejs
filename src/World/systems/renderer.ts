import { WebGLRenderer } from 'three';

export function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });

  // turn on the physically correct lighting model
  renderer.physicallyCorrectLights = true;

  return renderer;
}
