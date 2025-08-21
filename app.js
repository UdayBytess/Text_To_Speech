//SpeechSynthesis is a Engine built on the browser, communicates with avail voices in os and browser.
let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");
let button = document.querySelector("button");
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voiceSelect.innerHTML = ""; // Clear old options
    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voiceSelect.add(option);
    });
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

button.addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
    // //if not speaking -> Start speaking
    // if(!window.speechSynthesis.speaking && !window.speechSynthesis.paused){
    //     speech.text = document.querySelector("textarea").value;
    //     if(!speech.text.trim()) return;//prevents speaking if text area is empty.
    //     window.speechSynthesis.cancel();//Stops ongoing speech or queued speech.
    //     window.speechSynthesis.speak(speech);
    //     listenbtn.textContent = "Pause";
    // }
    // //If speaking but not paused -> Pause
    // else if(!window.speechSynthesis.paused){
    //     window.speechSynthesis.pause();
    //     listenbtn.textContent = "Resume";
    // }
    // else{
    //     //Reset button text when speech ends.
    //     window.speechSynthesis.resume();
    //     listenbtn.textContent = "Pause";
    // }


//Reset button text when speech ends
// speech.onend = () => {
//     listenbtn.textContent = "Listen";
// }
