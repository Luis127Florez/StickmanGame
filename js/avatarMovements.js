function moveForward() {
    changePostureAvatar("./img/adelante1.png");
    displaceAvatar({ ...avatarPosition, right: avatarPosition.right - 1 });
}

function moveBack() {
    changePostureAvatar("./img/atras.png");
    displaceAvatar({ ...avatarPosition, right: avatarPosition.right + 1 });
}

function moveDown() {
    changePostureAvatar("./img/abajo.png");
}

function moveUp() {
    changePostureAvatar("./img/arriba.png");
    displaceAvatar({ ...avatarPosition, top: avatarPosition.top - 1 });
}
