var btnTranslate = document.querySelector("#btn-translate");
var inputBox = document.querySelector("textarea");
var outputBox = document.querySelector("#outputBox");
// var anchorTag = document.querySelector("a[href='home']");
// console.log(outputBox);

// inputBox.innerText = "Hii i am harsh";


btnTranslate.addEventListener("click",function clickHandler(){
    var userInput = inputBox.value;
    outputBox.innerText = "ni amboj ala: translation of "+ userInput;
});

