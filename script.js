var botoes = document.querySelectorAll("button")
var visor = document.querySelector("#visor")


botoes[0].addEventListener("click", function() {
    
    
    numberOne = visor.appendChild(document.createElement("h1"))
    numberOne.innerText = 7

});

botoes[1].addEventListener("click", function() {
    
    
    numberOne = visor.appendChild(document.createElement("h1"))
    numberOne.innerText = 8

});

botoes[2].addEventListener("click", function() {
    
    
    numberOne = visor.appendChild(document.createElement("h1"))
    numberOne.innerText = 9

});

botoes[3].addEventListener("click", function() {
    
    
    numberOne = visor.appendChild(document.createElement("h1"))
    numberOne.innerText = "*"

});

botoes[4].addEventListener("click", function() {
    
    
    numberOne = visor.appendChild(document.createElement("h1"))
    numberOne.innerText = 4

});

botoes[5].addEventListener("click", function() {
    
    
    numberOne = visor.appendChild(document.createElement("h1"))
    numberOne.innerText = 5

});

botoes[6].addEventListener("click", function() {
    
    
    numberOne = visor.appendChild(document.createElement("h1"))
    numberOne.innerText = 6

});

botoes[7].addEventListener("click", function() {
    
    
    numberOne = visor.appendChild(document.createElement("h1"))
    numberOne.innerText = "-"

});botoes[8].addEventListener("click", function() {
    
    
    numberOne = visor.appendChild(document.createElement("h1"))
    numberOne.innerText = 1

});

botoes[9].addEventListener("click", function() {
    
    
    numberOne = visor.appendChild(document.createElement("h1"))
    numberOne.innerText = 2

});

botoes[10].addEventListener("click", function() {
    
    
    numberOne = visor.appendChild(document.createElement("h1"))
    numberOne.innerText = 3

});

botoes[11].addEventListener("click", function() {
    
    
    numberOne = visor.appendChild(document.createElement("h1"))
    numberOne.innerText = "+"

});

botoes[12].addEventListener("click", function() {
    
    
    numberOne = visor.appendChild(document.createElement("h1"))
    numberOne.innerText = 0

});

botoes[13].addEventListener("click", function() {
    
    
    numberOne = visor.appendChild(document.createElement("h1"))
    numberOne.innerText = "/"

});

botoes[14].addEventListener("click", function() {
    
    let numbers = document.querySelectorAll("h1");
    let numberString = "";
    for (let number of numbers){
        numberString += number.innerText;
    }
    let numberInt = eval(numberString);
    visor.innerText = numberInt

});


botoes[15].addEventListener("click", function() {
    
    visor.innerText = ""
    

})
