"use strict";

var speech = new SpeechSynthesisUtterance();
var voiceslect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = function () {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  voices.forEach(function (voice, i) {
    return voiceslect.options[i] = new Option(voice.name, i);
  });
};

document.querySelector("button").addEventListener("click", function () {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
//# sourceMappingURL=script.dev.js.map
