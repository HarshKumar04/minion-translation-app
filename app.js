var btnTranslate = document.querySelector("#btn-translate");
var inputBox = document.querySelector("textarea");
// var anchorTag = document.querySelector("a[href='home']");
// console.log(anchorTag);

// inputBox.innerText = "Hii i am harsh";

btnTranslate.addEventListener("click",function clickHandler(){
    var output = inputBox.value;
    console.log(output);
});

