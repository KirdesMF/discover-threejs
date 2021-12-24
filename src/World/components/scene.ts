import { Color, Scene } from 'three';

export function createScene() {
  const scene = new Scene();
  const color = getComputedStyle(document.documentElement)
    .getPropertyValue('--container-background')
    .trim();

  scene.background = new Color(color || 'skyblue');

  return scene;
}
