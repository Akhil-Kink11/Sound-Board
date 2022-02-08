// array of sound effects
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

//looping
sounds.forEach(sound => {
    const btn = document.createElement('button') //button created
    btn.classList.add('btn') //button class btn

    btn.innerText = sound //buttons innertext

    btn.addEventListener('click', () => {
        stopSongs( )

        //.play for playing the audio
        document.getElementById(sound).play() //id that we wanna find fot playing is sound
    })

    document.getElementById('buttons'). //inserting the buttons and styling them
    appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause();
        song.currentTime = 0;
    })
}