import { useDispatch, useSelector } from "react-redux";
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

export const ScreenUseCase = () => {
  const dispatch = useDispatch();
  const avatarProperties = useSelector(avatarState);
  const [avatar, setAvatar] = useState<StaticImageData>();
  const [isAvatarInAir, setIsAvatarInAir] = useState<boolean>();

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
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      0.25,
      100
    );
    camera.position.set(0, 3, 10);;
    camera.lookAt(0, 3, 0);

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

    const loader = new GLTFLoader();
    loader.load(
      "/robot/RobotExpressive.glb",
      function (gltf: any) {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(0, 0, 0);
        model.rotation.y = Math.PI / 2;

        // model.scale.set(0.1, 0.1, 0.1);
        // createGUI(model, gltf.animations);
      },
      undefined,
      function (e) {
        console.error(e);
      }
    );

    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    const sceneRobot = document.getElementById("sceneRobot");
    sceneRobot?.append(renderer.domElement);

    //scene.add(cube);

    // camera.position.z = 5;

    camera.aspect = window.innerWidth / window.innerHeight;

    function asd() {
      requestAnimationFrame(asd);
      renderer.render(scene, camera);
    }
    asd();
  }, []);

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
