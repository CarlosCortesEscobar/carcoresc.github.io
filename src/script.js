document.addEventListener('DOMContentLoaded', () => {
    const audio = document.querySelector('.audio');
    const player = document.querySelector('.player');

    const on = document.querySelector('.volume-on');
    const off = document.querySelector('.volume-off');

    audio.addEventListener('click', () => {
        if (on.style.visibility == "hidden") {
            on.style.visibility = "visible"
            player.play();
        } else {
            on.style.visibility = "hidden"
            off.style.visibility = "visible"
            player.pause();
        }
    })

})