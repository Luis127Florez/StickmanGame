import * as THREE from "three";
import { GLTFLoader } from "../../../../js/GLTFLoader";
import { Scene } from "../../scenes/scenesCreator/scenesCreator";

export class Robot {
  private model: THREE.Object3D | null = null;
  private mixer: THREE.AnimationMixer | null = null;
  private actions: Record<string, THREE.AnimationAction> = {};
  private activeAction: THREE.AnimationAction | null = null;
  private previousAction: THREE.AnimationAction | null = null;
  private static instance: Robot;
  private scene: Scene | null = null;

  constructor() {}

  loadScene(scene: Scene) {
    this.scene = scene;
  }

  loadModel(path: string, onLoad?: () => void, onError?: (error: any) => void) {
    const loader = new GLTFLoader();

    loader.load(
      path,
      (gltf: any) => {
        this.model = gltf?.scene;

        if (this.model) {
          // this.model.scale.set(0.5, 0.5, 0.5);

          this.mixer = new THREE.AnimationMixer(this.model);

          gltf.animations.forEach((clip: any) => {
            const action = this.mixer!.clipAction(clip);
            action.loop = THREE.LoopOnce;
            this.actions[clip.name] = action;
          });

          if (this.scene) {
            this.scene.addElementTHREEToScene(this.model);
          } else {
            console.warn("No ha cargado la scene");
          }

          if (onLoad) onLoad();
        }
      },
      undefined,
      (error: any) => {
        if (onError) onError(error);
        else console.error(error);
      }
    );
  }

  // Método para cambiar de animación con transición
  fadeToAction(name: string, duration: number) {
    if (!this.actions[name]) {
      console.warn(`Action "${name}" not found`);
      return;
    }

    this.previousAction = this.activeAction;
    this.activeAction = this.actions[name];

    if (this.previousAction !== this.activeAction) {
      this.previousAction?.fadeOut(duration);
    }

    this.activeAction
      .reset()
      .setEffectiveTimeScale(1)
      .setEffectiveWeight(1)
      .fadeIn(duration)
      .play();
  }

  public static getInstance(): Robot {
    if (!Robot.instance) {
      Robot.instance = new Robot();
    }

    return Robot.instance;
  }

  // Método para actualizar el mixer (llamado en cada frame)
  update(deltaTime: number) {
    if (this.mixer) this.mixer.update(deltaTime);
  }
}
