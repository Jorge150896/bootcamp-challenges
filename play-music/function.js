const play = document.getElementById('play')
const music = new Audio('anime.mp3');


const Player = () =>{
    return{
        playMusic: function() {
            if (music.paused) {
                music.play();
                play.innerHTML = '<img src="http://abarcarodriguez.com/lab/pause.png" />';
                console.log("play")
            } else {
                music.pause();
                play.innerHTML = '<img class="pad" src="http://abarcarodriguez.com/lab/play.png" />';
                console.log("stop")
            }
          },
    }

}

var miPlayer = Player();


// const playMusic = () =>{
//     if (music.paused) {
//         music.play();
//         play.innerHTML = '<img src="http://abarcarodriguez.com/lab/pause.png" />';
//         console.log("play")
//     } else {
//         music.pause();
//         play.innerHTML = '<img class="pad" src="http://abarcarodriguez.com/lab/play.png" />';
//         console.log("stop")
//     }
// }

// const miPlayer = () => { 
//     playMusic()
// }
