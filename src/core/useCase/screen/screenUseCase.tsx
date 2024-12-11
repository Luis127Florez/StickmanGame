import { ScreenView } from "../../views/screen/screenView";
import React, { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import { TAvatarProperties, TMovement } from "./types";
import * as THREE from "three";
import { Avatar } from "../../../game/entities/avatar/avatarUsecase";
import { GLTFLoader } from "../../../../js/GLTFLoader";
import { getImageChanger } from "../../../game/systems/avatarExportImage";
import { debounce } from "../../../game/functions/debounce";

export const ScreenUseCase = () => {
  const [avatar] = useState(new Avatar());
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const [actions, setActions] = useState<any>({});
  const [activeAction, setActiveAction] = useState<any>();
  const [previousAction, setPreviousAction] = useState<any>();
  const [avatarProperties, setAvatarProperties] = useState<TAvatarProperties>(
    avatar.getProperties()
  );
  const [avatarImg, setAvatarImg] = useState<StaticImageData>();

  const executeAction = ({ name }: { name: string }) => {
    setPreviousAction(activeAction);
    setActiveAction(actions[name]);
  };

  useEffect(() => {
    if (activeAction && previousAction) {
      if (previousAction !== activeAction) {
        previousAction.fadeOut(0.5);
      }
      activeAction
        .reset()
        .setEffectiveTimeScale(1)
        .setEffectiveWeight(1)
        .fadeIn(0.5)
        .play();
    }
  }, [activeAction, previousAction]);

  useEffect(() => {
    // creación de la escena
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe0e0e0);
    scene.fog = new THREE.Fog(0xe0e0e0, 20, 100);

    const clock = new THREE.Clock();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.position.set(-5, 3, 10);
    camera.lookAt(0, 2, 0);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);
    document?.getElementById("screen")?.appendChild(renderer.domElement);

    // lights

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

    const grid = new THREE.GridHelper(200, 40, 0x000000, 0x000000);
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    scene.add(grid);

    const loader = new GLTFLoader();
    let mixer: any;

    loader.load(
      "/models/robot/RobotExpressive.glb",
      function (gltf: any) {
        const model = gltf.scene;
        model.scale.set(0.5, 0.5, 0.5); // Reduce a la mitad en todos los ejes
        mixer = new THREE.AnimationMixer(model);

        // caminar

        const actions: any = {};

        for (let i = 0; i < gltf?.animations?.length; i++) {
          const clip = gltf.animations[i];

          const action = mixer.clipAction(clip);

          // permite que la acción solo se ejecute una sola vez
          action.loop = THREE.LoopOnce;

          actions[clip.name] = action;
        }

        setActions(actions);

        /* if (
            emotes.indexOf(clip.name) >= 0 ||
            states.indexOf(clip.name) >= 4
          ) {
            action.clampWhenFinished = true;
            action.loop = THREE.LoopOnce;
          } */

        /* action.clampWhenFinished = true; */

        const activeAction = actions["Walking"];

        setActiveAction(activeAction);
        setPreviousAction(activeAction);

        activeAction.play();

        // render

        scene.add(model);

        // createGUI(model, gltf.animations);
      },
      undefined,
      function (e: any) {
        console.error(e);
      }
    );

    camera.position.z = 5;

    function animate() {
      const dt = clock.getDelta();

      if (mixer) mixer.update(dt);

      renderer.render(scene, camera);
    }
  }, []);

  useEffect(() => {
    const newImagen = getImageChanger({ newMovement: "ArrowRight5" });
    setAvatarImg(newImagen);

    setInterval(() => {
      avatar.moveAvatarToDown({ gravity: true });
      setAvatarProperties(avatar.getProperties());
    }, 15);
  }, []);

  const animateAvatar = ({ movement }: { movement: TMovement }) => {
    let count = 1;
    const intervalId = setInterval(() => {
      const newImage = getImageChanger({
        newMovement: `${movement}${count}`,
      });
      setAvatarImg(newImage);
      if (count >= 4) {
        clearInterval(intervalId);
      }
      count++;
    }, 100);
  };

  const calmDownAvatar = ({ waitTime }: { waitTime: number }) => {
    const id = debounce({
      func: () => {
        const newImagen = getImageChanger({
          newMovement: `${avatar.getPropertyCurrentMovement()}5`,
        });
        setAvatarImg(newImagen);
      },
      delay: waitTime,
      intervalId: intervalId,
    });

    setIntervalId(id);
  };

  const moveAvatarToUp = async (limit = 90) => {
    animateAvatar({ movement: `ArrowUp` });

    for (let index = 0; index < limit; index++) {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(resolve);
        }, 5);
      });

      avatar.moveToUp();

      setAvatarProperties(avatar.getProperties());
    }
    calmDownAvatar({ waitTime: 1000 });
  };

  const moveAvatarToRight = () => {
    animateAvatar({ movement: "ArrowRight" });
    avatar.moveAvatarToRight();
    setAvatarProperties(avatar.getProperties());
    calmDownAvatar({ waitTime: 700 });
  };

  const moveAvatarToLeft = () => {
    animateAvatar({ movement: "ArrowLeft" });
    avatar.moveAvatarToLeft();
    setAvatarProperties(avatar.getProperties());
    calmDownAvatar({ waitTime: 700 });
  };

  const moveAvatarToDown = () => {
    const newImagen = getImageChanger({ newMovement: "ArrowDown" });
    setAvatarImg(newImagen);
    avatar.moveAvatarToDown({ gravity: false });
    setAvatarProperties(avatar.getProperties());
  };

  useEffect(() => {
    document.addEventListener(
      "keydown",
      (event) => {
        const codeValue = event.code;

        if (codeValue === "ArrowUp") {
          // moveAvatarToUp();
        }

        if (codeValue === "ArrowRight") {
          //moveAvatarToRight();
          console.log('right');

          executeAction({ name: "Running" });
        }

        if (codeValue === "ArrowLeft") {
          moveAvatarToLeft();
        }

        if (codeValue === "ArrowDown") {
          moveAvatarToDown();
        }
      },
      false
    );
  }, []);

  return (
    <ScreenView avatarImg={avatarImg} avatarProperties={avatarProperties} />
  );
};
