const pacman = document.querySelector(".pacman")
const ghost = document.querySelector(".ghost")

// Declaração da função jump - o pulo

const jump = () => {
    pacman.classList.add("jump-pacman");
    setTimeout(() => {
        pacman.classList.remove("jump-pacman");
    }, 500)
}

//Intervalo para criação do evento de colisão

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

        const refresh = document.querySelector(".refresh");
        const imgStart = document.querySelector(".imgStart")
        console.log(imgStart)
        refresh.addEventListener("click", refreshGame);
        imgStart.removeAttribute("hidden");

    clearInterval(loopGame);
}
    
}, 10);

//Chamamento da função jump, sempre que os eventos ocorrerem

document.addEventListener("click", jump);
document.addEventListener("keydown", jump);


// Botão de reiniciar

function refreshGame(){
    window.location.reload();
}