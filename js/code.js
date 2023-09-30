let avatarId = '';
let avatarPosition = { top: 67, right: 80 };


function displaceAvatar({ top, right }) {
    avatarPosition = { top, right }
}

function changePostureAvatar(urlImage) {
    const screen = document.getElementById('screen');
    console.log(screen.clientWidth, 'ヾ(⌐■_■)ノ♪ヾ(⌐■_■)ノ♪');
    const oldPostureAvatar = document.getElementById(`${avatarId}`);
    if (oldPostureAvatar) screen.removeChild(oldPostureAvatar);
    const newPostureAvatar = document.createElement("img");
    newPostureAvatar.src = urlImage;
    avatarId = `${Math.random()}`;
    newPostureAvatar.id = avatarId;
    newPostureAvatar.className = 'avatar';
    newPostureAvatar.style = `position: absolute; top: ${avatarPosition?.top}%; right: ${avatarPosition?.right}%;`
    screen.appendChild(newPostureAvatar);
}

function moveForward() {
    changePostureAvatar('./img/adelante1.png');
    displaceAvatar({ ...avatarPosition, right: avatarPosition.right - 1 });
}

function moveBack() {
    changePostureAvatar('./img/atras.png');
    displaceAvatar({ ...avatarPosition, right: avatarPosition.right + 1 });

}

function moveDown() {
    changePostureAvatar('./img/abajo.png');
}

function moveUp() {
    changePostureAvatar('./img/arriba.png');
    displaceAvatar({ ...avatarPosition, top: avatarPosition.top - 1 });

}


document.addEventListener('keydown', (event) => {
    const keyValue = event.key;
    const codeValue = event.code;
    switch (codeValue) {
        case 'ArrowUp':
            moveUp();
            break;
        case 'ArrowRight':
            moveForward();
            break;
        case 'ArrowLeft':
            moveBack();
            break;
        case 'ArrowDown':
            moveDown();
            break;

        default:
            break;
    }
}, false);


