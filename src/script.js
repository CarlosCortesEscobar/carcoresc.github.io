document.addEventListener('DOMContentLoaded', () => {
    let player = document.querySelector('.player')
    let spkrOn = document.querySelector('#spkrI')
    let spkrOff = document.querySelector('#spkrO')

    spkrOn.addEventListener('click', () => {
        player.pause()
        spkrOn.style.visibility = "hidden"
        spkrOff.style.visibility = "visible"
    })
    
    spkrOff.addEventListener('click', () => {
        player.play()
        spkrOff.style.visibility = "hidden"
        spkrOn.style.visibility = "visible"
    })

})