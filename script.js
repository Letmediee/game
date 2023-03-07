var character = document.getElementById("character");

document.addEventListener("click", function (event) {
    jump();
})

function jump() {
    if (character.classList != 'animate') {
        character.classList.add('animate')
    }
    setTimeout(function () {
        character.classList.remove('animate')
    }, 300)
}

let isAlive = setInterval (function () {
    let dino = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
    let cactus = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
    if (cactus < 50 && cactus > 0 && dino >= 140){
    alert('GAME OVER')
}
}, 10)
