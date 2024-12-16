import { ScreenView } from "../../views/screen/screenView";
import React, { useEffect, useState } from "react";
import { TMovement } from "./types";
import * as THREE from "three";
import { Scene } from "../../../game/scenes/scenesCreator/scenesCreator";
import { Robot } from "../../../game/entities/robot/robotUseCase";
import { debounce } from "../../../game/functions/debounce";
import { OrbitControls } from "../../../../js/OrbitControls";

export const ScreenUseCase = () => {
  const [robot] = useState<Robot>(Robot.getInstance());
  const [scene] = useState<Scene>(Scene.getInstance());

  const chargedSceneAndCamera = () => {
    // creación de la escena;
    scene.renderScene("screen", animate);
    scene.addLight();
    scene.addGridMesh();

    // control 

    const controls = new OrbitControls(scene.camera, scene.renderer.domElement);
    controls.target.set(0, 10, 0);
    controls.update();
    
   // robot 
    robot.loadScene(scene);
    


    robot.loadModel(
      "/models/robot/RobotExpressive.glb",
      () => {
        robot.fadeToAction("Running", 0.5); // Cambiar al estado inicial
      },
      (error: any) => console.error(error)
    );

    // Animación
    const clock = new THREE.Clock();

    function animate() {
      const deltaTime = clock.getDelta();
      controls.update(); // Actualizar move
      robot.update(deltaTime); // Actualizar robot
      scene.renderer.render(scene.scene, scene.camera);
    }
  };

  let intervalId: NodeJS.Timeout;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    intervalId = debounce({
      func: chargedSceneAndCamera,
      delay: 10,
      intervalId,
    });
  }, []);

  const animateAvatar = ({ movement }: { movement: TMovement }) => {
    robot.fadeToAction(movement, 0.5);
  };

  const moveAvatarToUp = async () => {
    animateAvatar({ movement: "Jump" });
  };

  const moveAvatarToRight = () => {
    animateAvatar({ movement: "Running" });
  };

  const moveAvatarToLeft = () => {
    animateAvatar({ movement: "Yes" });
  };

  const moveAvatarToDown = () => {
    animateAvatar({ movement: "ThumbsUp" });
  };

  useEffect(() => {
    document.addEventListener(
      "keydown",
      (event) => {
        const codeValue = event.code;

        if (codeValue === "ArrowUp") {
          moveAvatarToUp();
        }

        if (codeValue === "ArrowRight") {
          moveAvatarToRight();
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

  return <ScreenView />;
};
