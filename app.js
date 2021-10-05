var btnTranslate = document.querySelector("#btn-translate");
var inputBox = document.querySelector("textarea");
var outputBox = document.querySelector("#outputBox");
// var anchorTag = document.querySelector("a[href='home']");
// console.log(outputBox);

// inputBox.innerText = "Hii i am harsh";
var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

btnTranslate.addEventListener("click",function clickHandler(){
    fetch(url).then(response => response.json()).then(json => )
    var userInput = inputBox.value;
    outputBox.innerText = "ni amboj ala: translation of "+ userInput;
});

