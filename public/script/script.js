var SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition
var recognition = new SpeechRecognition()
console.log(recognition)
recognition.lang = "pt-BR"
recognition.iterimResults = false

document.getElementById("textarea")
textarea.value = "OLA"


document.querySelector("button").addEventListener("click", () => {
        recognition.start()
        console.log("iniciou")    
})


recognition.addEventListener("result", (e) => {
    console.log(e)
    let last = e.results.length - 1;
    let text = e.results[last][0].transcript;
    textarea.value += 'Confidence: ' + e.results[0][0].confidence
    console.log('Confidence: ' + e.results[0][0].confidence);
})
