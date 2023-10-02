
document.addEventListener(
  "keydown",
  (event) => {
    const keyValue = event.key;
    const codeValue = event.code;
    switch (codeValue) {
      case "ArrowUp":
        moveUp();
        break;
      case "ArrowRight":
        moveForward();
        break;
      case "ArrowLeft":
        moveBack();
        break;
      case "ArrowDown":
        moveDown();
        break;

      default:
        break;
    }
  },
  false
);
