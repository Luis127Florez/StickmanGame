import * as THREE from "three";

export function startSceneAndCamera(): { scene: THREE.Scene , camera: THREE.PerspectiveCamera } {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    0.25,
    100
  );
  camera.position.set(0, 3, 15);
  // el primero es de izquierda derecha
  camera.lookAt(8, 3, 0);

  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 3);
  hemiLight.position.set(0, 20, 0);
  scene.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 3);
  dirLight.position.set(0, 20, 10);
  scene.add(dirLight);

  // ground

  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(2000, 2000),
    new THREE.MeshPhongMaterial({ color: 0xcbcbcb, depthWrite: false })
  );
  mesh.rotation.x = -Math.PI / 2;
  scene.add(mesh);

  return { scene, camera };
}
