
var buttons = document.querySelectorAll(".drum");

for(var i = 0;i < buttons.length; i++){
    buttons[i].addEventListener("click", function (){
        playDrum(this.innerHTML);
      });
}

document.addEventListener("keydown",function(event){
    playDrum(event.key);
});

function playDrum(letter){
    switch(letter){
            case "w": var clipName = "sounds/crash.mp3";
            break;
            case "a": var clipName = "sounds/tom-1.mp3";
            break;
            case "s": var clipName = "sounds/tom-2.mp3";
            break;
            case "d": var clipName = "sounds/kick-bass.mp3";
            break;
            case "j": var clipName = "sounds/snare.mp3";
            break;
            case "k": var clipName = "sounds/tom-3.mp3";
            break;
            case "l": var clipName = "sounds/tom-4.mp3";
            break;
            default: console.log(letter + " pressed: not a drum key");
    }

    var audio = new Audio(clipName);
    audio.play();
    buttonAnimation(letter);
}

function buttonAnimation(letter){
    var activeButton = document.querySelector("." + letter);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed")},100);

}


