import { ScreenView } from "../../views/screen/screenView";
import React, { useEffect, useRef, useState } from "react";
import { TMovement } from "./types";
import * as THREE from "three";
import { Scene } from "../../../game/scenes/scenesCreator/scenesCreator";
import { Robot } from "../../../game/entities/robot/robotUseCase";

export const ScreenUseCase = () => {
  const robotRef = useRef<any>(null);

  const chargedSceneAndCamera = () => {
    // creación de la escena
    const scene = new Scene();
    scene.renderScene("screen", animate);
    scene.addLight();
    scene.addGridMesh();
    
    const robot = new Robot(scene);
    robot.loadModel(
      "/models/robot/RobotExpressive.glb",
      () => {
        robot.fadeToAction("Running", 0.5); // Cambiar al estado inicial
      },
      (error) => console.error(error)
    );
  
    // Animación
    const clock = new THREE.Clock();
  
    function animate() {
      const deltaTime = clock.getDelta();
      robot.update(deltaTime); // Actualizar robot
      scene.renderer.render(scene.scene, scene.camera);
    }
  }

  useEffect(() => {
    chargedSceneAndCamera();
  }, []);


  const animateAvatar = ({ movement }: { movement: TMovement }) => {
    console.log(robotRef.current);

    if (robotRef.current) {
      robotRef.current.fadeToAction(movement, 0.5);
    } else {
      console.warn("Robot no está cargado todavía.");
    }
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
