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


