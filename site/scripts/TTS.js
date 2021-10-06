// init
var synth = window.speechSynthesis;
var utterThis = new SpeechSynthesisUtterance();
utterThis.pitch = 1;
utterThis.rate = 1;
utterThis.volume = 1.0;
utterThis.lang = "fr-FR";

// @param text
// text à dire
function tts(text) {
    console.log(text);
    utterThis.text = text;
    console.log(utterThis);
    synth.speak(utterThis);
}


