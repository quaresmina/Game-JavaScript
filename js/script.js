const pacman = document.querySelector(".pacman")
const ghost = document.querySelector(".ghost")

const jump = () => {
    pacman.classList.add("jump-pacman");
    setTimeout(() => {
        pacman.classList.remove("jump-pacman");
    }, 500)
}

const loopGame = setInterval(() => {
    const ghostPosition = ghost.offsetLeft;
    const pacmanPosition = +window
        .getComputedStyle(pacman)
        .bottom.replace("px", "");
 
    if (ghostPosition <= 120 && ghostPosition > 0 && pacmanPosition < 80) {
        ghost.style.animation = "none";
        ghost.style.left = `${ghostPosition}px`;

        pacman.style.animation = "none";
        pacman.style.bottom = `${pacmanPosition}px`;

        pacman.src = "./Imagens/death-pacman.webp";
        pacman.style.width = "105px";
        pacman.style.marginLeft = "45px";

    clearInterval(loopGame);
}
    
}, 10);

const refreshButton = document.querySelector('.refresh')

//refreshButton.addEventListener('click', refreshGame())

//function refreshGame(){
   // window.location.reload();

//}

document.addEventListener("keydown", jump);