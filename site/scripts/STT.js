// @param display
// l object html qui va recevoir le text

function runSpeech(display) {

    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    recognition.onspeechend = function() {
        recognition.stop();
    }

    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        display.innerHTML = transcript;
    };

    // start recognition
    recognition.start();
}