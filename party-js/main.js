console.log('party.js');

var metaChar = false;
var exampleKey = 16;

const musics = ['./sounds/wood.wav','./sounds/fizzle.wav','./sounds/hat.wav','./sounds/kick.wav','./sounds/snare.wav','./sounds/snarezz.wav','./sounds/synth.wav','./sounds/vox1.wav','./sounds/vox2.wav','./sounds/vox3.wav'];

const playMusic = (valor) =>{
    let music = new Audio(musics[valor]);
    if (music.paused) {
        music.play();
        console.log(musics[valor])
    } else {
        music.pause();
    }
}

function keyEvent(event) {
  document.querySelectorAll(".blow").forEach((element)=>{element.classList.remove("blow")})
  var key = event.keyCode || event.which;
  var keychar = String.fromCharCode(key);
  if (key == exampleKey) {
    metaChar = true;
  }
  if (key != exampleKey) {
    if (metaChar) {
      console.log("Combination of metaKey + " + keychar);
      metaChar = false;
    } else {
        console.log("Teclado" + keychar);
        playMusic(keychar)
        sombreado(keychar)
        
    }
  }
}

function sombreado(valor){
    let elemento = document.getElementById(`balloon_${valor}`);
    elemento.classList.add("blow");
}



