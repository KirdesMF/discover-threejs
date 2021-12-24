import { AmbientLight, DirectionalLight, HemisphereLight } from 'three';

export function createLights() {
  // main light
  const mainLight = new DirectionalLight('white', 2);
  mainLight.position.set(10, 10, 10);

  // ambient light
  const ambientLight = new HemisphereLight(
    'white', // sky color
    'darkslategrey', //  ground color
    2.5 // intensity
  );

  return { mainLight, ambientLight };
}
