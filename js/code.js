let avatarId = '';

function moveForward() {
    const screen = document.getElementById('screen');
    const oldImg =  document.getElementById(`${avatarId}`);
    if (oldImg) screen.removeChild(oldImg);
    const img = document.createElement("img");
    img.src = "./img/adelante1.png";
    avatarId = `${Math.random()}`; 
    img.id = avatarId;
    img.className = 'avatar';
    screen.appendChild(img);    
}

function moveBack() {
    const screen = document.getElementById('screen');
    const oldImg =  document.getElementById(`${avatarId}`);
    if (oldImg) screen.removeChild(oldImg);
    const img = document.createElement("img");
    img.src = "./img/atras.png";
    avatarId = `${Math.random()}`; 
    img.id = avatarId;
    img.className = 'avatar';
    screen.appendChild(img);   
}

function moveDown() {
    const screen = document.getElementById('screen');
    const oldImg =  document.getElementById(`${avatarId}`);
    if (oldImg) screen.removeChild(oldImg);
    const img = document.createElement("img");
    img.src = "./img/abajo.png";
    avatarId = `${Math.random()}`; 
    img.id = avatarId;
    img.className = 'avatar';
    screen.appendChild(img);  
}

function moveUp() {
    const screen = document.getElementById('screen');
    const oldImg =  document.getElementById(`${avatarId}`);
    if (oldImg) screen.removeChild(oldImg);
    const img = document.createElement("img");
    img.src = "./img/arriba.png";
    img.className = 'avatar';
    avatarId = `${Math.random()}`; 
    img.id = avatarId;
    screen.appendChild(img);  
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


