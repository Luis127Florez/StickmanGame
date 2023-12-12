import { ScreenView } from "../../views/screen/screenView";
import React, { useEffect, useState } from "react";
import { avatarState } from "../../../redux/states";
import avatarUp from "../../../../public/img/arriba.png";
import avatarBack from "../../../../public/img/atras.png";
import avatarForward from "../../../../public/img/adelante.png";
import avatarDown from "../../../../public/img/abajo.png";
import { StaticImageData } from "next/image";
import {
  moveBack,
  moveDown,
  moveForward,
  moveUp,
} from "../../../redux/avatar/avatarExtraReducer";
import { checkDevouring } from "../../../controllers/avatar/avatarFunctions";
import { TFCheckDevouring } from "../../types/screenTypes/screenTypes";
import * as THREE from "three";
import { GLTFLoader } from "../../../../js/GLTFLoader";
import { startSceneAndCamera } from "../../../controllers/avatar/avatarGraphic";
import { useDispatch, useSelector } from "react-redux";

export const ScreenUseCase = () => {
  const dispatch = useDispatch();
  const avatarProperties = useSelector(avatarState);
  const [avatar, setAvatar] = useState<StaticImageData>();
  const [isAvatarInAir, setIsAvatarInAir] = useState<boolean>();
  const [model, setModel] = useState<any>();

  const jump = async (jumpLevel: number = 1) => {
    let limit = 0;
    if (jumpLevel === 1) {
      limit = 70;
    }
    if (jumpLevel === 2) {
      limit = 100;
    }
    for (let index = 0; index < limit; index++) {
      const { isDevouring, typesDevouring } = checkDevouring(document);
      const typeDevouring = typesDevouring.find((type) => type === "top");
      if (isDevouring && typeDevouring) return;
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(resolve);
        }, 10);
      });
      dispatch(moveUp(2));
    }
  };

  useEffect(() => {
    setInterval(() => {
      const { isDevouring, typesDevouring } = checkDevouring(document);

      const typeDevouring = typesDevouring.find((type) => type === "bottom");

      if (isDevouring && typeDevouring) return;

      dispatch(moveDown(1));
    }, 15);
  }, []);

  useEffect(() => {
    const { scene, camera } = startSceneAndCamera();

    const loader = new GLTFLoader();
    loader.load(
      "/robot/RobotExpressive.glb",
      function (gltf: any) {
        const model1 = gltf.scene;
        let i = 0;
        setInterval(() => {
          scene.add(model1);
          // el ultimo es lejos o cerca con respecto al fondo
          // el segundo es arriba abajo
          model1.position.set(0, 2, -3);
          i += 0.1
          model1.rotation.y = Math.PI / 2;

          model1.scale.set(0.3, 0.3, 0.3);
          setTimeout(() => {
            scene.remove(model1);
          }, 500);
        }, 1000);

        setModel(model1);
        // createGUI(model, gltf.animations);
      },
      undefined,
      function (e: Error) {
        console.error(e);
      }
    );

    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    const sceneRobot = document.getElementById("sceneRobot");
    sceneRobot?.append(renderer.domElement);

    camera.aspect = window.innerWidth / window.innerHeight;

    function asd() {
      requestAnimationFrame(asd);
      renderer.render(scene, camera);
    }
    asd();
  }, []);

  /*   useEffect(() => {
      let i = 0;
      if (model) {
        console.log(model);
        setInterval(() => {
          console.log(i);
          model.position.set(i, i, -3);
          i++;
        }, 2000);
      }
    }, [model]); */

  const moveAvatarToUp = () => {
    if (isAvatarInAir) return;

    setIsAvatarInAir(true);

    setAvatar(avatarUp);

    jump(1);

    setIsAvatarInAir(false);
  };

  const moveAvatarToRight = ({
    isDevouring,
    typesDevouring,
  }: TFCheckDevouring) => {
    setAvatar(avatarForward);
    const typeDevouring = typesDevouring.find((type) => type === "right");
    if (isDevouring && typeDevouring) {
      return;
    }
    dispatch(moveForward(4));
  };

  const moveAvatarToLeft = ({
    isDevouring,
    typesDevouring,
  }: TFCheckDevouring) => {
    setAvatar(avatarBack);
    const typeDevouring = typesDevouring.find((type) => type === "left");
    if (isDevouring && typeDevouring) {
      return;
    }
    dispatch(moveBack(4));
  };

  const moveAvatarToDown = ({
    isDevouring,
    typesDevouring,
  }: TFCheckDevouring) => {
    setAvatar(avatarDown);
    const typeDevouring = typesDevouring.find((type) => type === "bottom");
    if (isDevouring && typeDevouring) {
      return;
    }
    dispatch(moveDown(4));
  };

  useEffect(() => {
    document.addEventListener(
      "keydown",
      (event) => {
        const checkedDevouring = checkDevouring(document);
        const codeValue = event.code;
        switch (codeValue) {
          case "ArrowUp":
            moveAvatarToUp();
            break;
          case "ArrowRight":
            moveAvatarToRight(checkedDevouring);
            break;
          case "ArrowLeft":
            moveAvatarToLeft(checkedDevouring);
            break;
          case "ArrowDown":
            moveAvatarToDown(checkedDevouring);
            break;
          default:
            break;
        }
      },
      false
    );
  }, []);

  return <ScreenView avatar={avatar} avatarProperties={avatarProperties} />;
};
