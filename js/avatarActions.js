function displaceAvatar({ top, right }) {
    avatarPosition = { top, right };
}

function changePostureAvatar(urlImage) {
    const screen = document.getElementById("screen");
    console.log(screen.getBoundingClientRect(), "ヾ(⌐■_■)ノ♪ヾ(⌐■_■)ノ♪");
    const oldPostureAvatar = document.getElementById(`${avatarId}`);
    if (oldPostureAvatar) screen.removeChild(oldPostureAvatar);
    const newPostureAvatar = document.createElement("img");
    newPostureAvatar.src = urlImage;
    avatarId = `${Math.random()}`;
    newPostureAvatar.id = avatarId;
    newPostureAvatar.className = "avatar";


    newPostureAvatar.style = `position: absolute; top: ${avatarPosition?.top}%; right: ${avatarPosition?.right}%;`;
    screen.appendChild(newPostureAvatar);
    const elemento = document.querySelector(".avatar");
    const rect = elemento.getBoundingClientRect();

    console.log("left:", Math.round(rect.left));
    console.log("top:", Math.round(rect.top));
    console.log("right:", Math.round(rect.right));
    console.log("bottom:", Math.round(rect.bottom));
    console.log("width:", Math.round(rect.width));
    console.log("height:", Math.round(rect.height));
}
