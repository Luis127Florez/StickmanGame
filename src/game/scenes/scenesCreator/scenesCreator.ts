import * as THREE from "three";
import { T_CameraMeasures } from "./types.d";
import { GLTFLoader } from "../../../../js/GLTFLoader";

export class Scene {
  scene: THREE.Scene;
  clock: THREE.Clock;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  loader: GLTFLoader;

  mixer: any;

  /*
     @param fov — Camera frustum vertical field of view. Default 50.
     @param aspect — Camera frustum aspect ratio. Default 1.
     @param near — Camera frustum near plane. Default 0.1.
     @param far — Camera frustum far plane. Default 2000.

    */

  constructor(cameraMeasures?: T_CameraMeasures) {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xe0e0e0);
    this.scene.fog = new THREE.Fog(0xe0e0e0, 20, 100);

    this.renderer = new THREE.WebGLRenderer();

    this.clock = new THREE.Clock();
    this.loader = new GLTFLoader();
    this.mixer = null;

    this.camera = new THREE.PerspectiveCamera(
      cameraMeasures?.fov ?? 75,
      cameraMeasures?.aspect ?? window.innerWidth / window.innerHeight,
      cameraMeasures?.near ?? 0.1,
      cameraMeasures?.far ?? 1000
    );
    this.camera.position.set(-5, 3, 10);
    this.camera.lookAt(0, 2, 0);

    this.camera.position.z = 5;
  }

  addElementTHREEToScene(elementTHREE: any) {
    this.scene.add(elementTHREE);
  }

  renderScene(elementId: string, animate: any) {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setAnimationLoop(animate);
    document?.getElementById(elementId)?.appendChild(this.renderer.domElement);
  }

  addLight() {
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 3);
    hemiLight.position.set(0, 20, 0);
    this.addElementTHREEToScene(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 3);
    dirLight.position.set(0, 20, 10);
    this.addElementTHREEToScene(dirLight);
  }

  addGridMesh() {
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2000, 2000),
      new THREE.MeshPhongMaterial({ color: 0xcbcbcb, depthWrite: false })
    );
    mesh.rotation.x = -Math.PI / 2;
    this.addElementTHREEToScene(mesh);

    const grid = new THREE.GridHelper(200, 40, 0x000000, 0x000000);
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    this.addElementTHREEToScene(grid);
  }

  /*  animate(thisA: any) {
    const thisB = this || thisA;

    const dt = thisB.clock?.getDelta();

    if (thisB?.mixer) thisB?.mixer.update(dt);

    thisB?.renderer?.render(thisB.scene, thisB.camera);
  }
  
  setMixer(mixer: THREE.AnimationMixer) {
    this.mixer = mixer;
  }
 */
}
