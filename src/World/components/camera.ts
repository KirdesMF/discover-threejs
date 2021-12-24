import { PerspectiveCamera } from 'three';

const SET_CAM = {
  fov: 35,
  aspect: 1,
  near: 0.1,
  far: 1000,
};

export function createCamera() {
  const camera = new PerspectiveCamera(
    SET_CAM.fov,
    SET_CAM.aspect,
    SET_CAM.near, // objects closer to the camera than ten centimeters will not be visible.
    SET_CAM.far // we can se for a distance of 100 meters
  );

  camera.position.set(-1.5, 1.5, 6.5);
  return camera;
}
