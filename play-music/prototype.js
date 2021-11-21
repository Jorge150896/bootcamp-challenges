const Player= function () {
    this.music = new Audio('anime.mp3');
    this.play = document.getElementById('play');
};

Player.prototype.playMusic = function () {
    if (this.music.paused) {
        this.music.play();
        play.innerHTML = '<img src="http://abarcarodriguez.com/lab/pause.png" />';
    } else {
        this.music.pause();
        play.innerHTML = '<img class="pad" src="http://abarcarodriguez.com/lab/play.png" />';
    }
}

const miPlayer = new Player();