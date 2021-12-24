import 'three';
import 'three/examples/jsm/controls/OrbitControls.js';

//FIXME find an other way instead of add a method to the class

declare module 'three' {
  interface Object3D {
    tick: (delta: number) => void;
  }

  interface OrbitControls {
    tick: () => void;
  }
}

declare module 'three/examples/jsm/controls/OrbitControls.js' {
  interface OrbitControls {
    tick: () => void;
  }
}
