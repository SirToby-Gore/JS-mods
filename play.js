let audioElement = null;

/**
 * ## `Play`
 * this is part of play.js part of JS-mods made by Toby Gore
 * 
 * This has no return value
 * 
 * When called however it will play the audio file and stop what ever is still playing
 * ### Args
 * * `path`
 *      - **string**
 *      - The path to the audio file
 */
function play(path) {
    if (audioElement) {
        audioElement.pause();
        audioElement = null;
    }

    audioElement = new Audio(path);
    audioElement.play();
}