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
import { useDispatch, useSelector } from "react-redux";

export const ScreenUseCase = () => {
  const dispatch = useDispatch();
  const avatarProperties = useSelector(avatarState);
  const [avatar, setAvatar] = useState<StaticImageData>();

  useEffect(() => {
    setInterval(() => {
      const { isDevouring, typesDevouring } = checkDevouring(document);

      const typeDevouring = typesDevouring.find((type) => type === "bottom");

      if (isDevouring && typeDevouring) return;

      dispatch(moveDown(1));
    }, 15);
  }, []);

<<<<<<< HEAD
=======
  useEffect(() => {
    const { scene, camera } = startSceneAndCamera();

    const loader = new GLTFLoader();
    loader.load(
      "/robot/RobotExpressive.glb",
      function (gltf: any) {
        const model1 = gltf.scene;

        model1.scale.set(0.3, 0.3, 0.3);

        let i = 0;
        setInterval(() => {
          scene.add(model1);
          // el ultimo es lejos o cerca con respecto al fondo
          // el segundo es arriba abajo
          model1.position.set(i, 2, -3);
          i += 0.9;
          model1.rotation.y = Math.PI / 2;

          model1.scale.set(0.3, 0.3, 0.3);
          setTimeout(() => {
            scene.remove(model1);
          }, 500);
        }, 1000);

        // setModel(model1);
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
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.render(scene, camera);
    }
    asd();
  }, []);



>>>>>>> 3178a561497da0cac714e0eb58687b29509cbede
  const moveAvatarToUp = () => {
    setAvatar(avatarUp);
  };

  const moveAvatarToRight = () => {
    setAvatar(avatarForward);
<<<<<<< HEAD
=======
    const typeDevouring = typesDevouring.find((type) => type === "right");
    if (isDevouring && typeDevouring) {
      return;
    }
    dispatch(moveForward(4))
>>>>>>> 3178a561497da0cac714e0eb58687b29509cbede
  };

  const moveAvatarToLeft = () => {
    setAvatar(avatarBack);
  };

  const moveAvatarToDown = () => {
    setAvatar(avatarDown);
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

  return <ScreenView avatar={avatar} avatarProperties={avatarProperties} />;
};
