class Player {
    constructor() {
        this.music = new Audio('anime.mp3');
        this.play = document.getElementById('play');
    }

    playMusic() { 
        if (this.music.paused) {
            this.music.play();
            this.play.innerHTML = '<img src="http://abarcarodriguez.com/lab/pause.png" />';
        } else {
            this.music.pause();
            this.play.innerHTML = '<img class="pad" src="http://abarcarodriguez.com/lab/play.png" />';
        }
    }
}

const miPlayer = new Player();