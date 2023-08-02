

var audio;

for (var i = 0; i < 3; i++) {
    document.querySelectorAll("#play")[i].addEventListener("click", function () {
        var text = this.innerHTML;

        if (audio == undefined) {
            playAudio(text);
        } else {
            audio.pause();
            playAudio(text);
        }
    });
}

function playAudio(text) {
    switch (text) {
        case "bewaja_bewaja":
            //audio.pause();
            text = "audio/" + text + ".mp3";
            audio = new Audio(text);
            audio.play();
            break;
        case "chali_chali":
            //audio.pause();
            text = "audio/" + text + ".mp3";
            audio = new Audio(text);
            audio.play();
            break;
        case "tip_tip":
            //audio.pause();
            text = "audio/" + text + ".mp3";
            audio = new Audio(text);
            audio.play();
            break;
    }
}

document.querySelector("#stop").addEventListener("click", function () {
    audio.pause();
});