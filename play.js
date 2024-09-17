let audioElement = null;

function play(path) {
    if (audioElement) {
        audioElement.pause();
    }

    audioElement = new Audio(path);
    audioElement.play();
}