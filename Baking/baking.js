var array_input = ["cake" , "bread"];
let isPlaying = true;

while (isPlaying){
var userInput = prompt ("What are you baking?").toLowerCase();
console.log(userInput);

var cake_array =["chocolate", "blueberry"];
var bread_array = ["oatmeal", "rye"];

switch (userInput){
    case "cake":
        if (userInput == "cake"){
            var userInput = prompt ("What kind of cake").toLowerCase();
            console.log(userInput);

        }
    case "chocolate":
        prompt    
}

switch(userInput){
    case "chocolate":
        if(userInput == "chocolate"){
            prompt ("Heres what you need for a chocolate cake")
        }
}

switch (userInput){
    case "blueberry":
        if (userInput == "blueberry"){
            prompt ("Heres what you need for a blueberry cake")
        }
}

switch (userInput){
    case "bread":
        if(userInput == "bread"){
            var userInput = prompt ("What kind of bread").toLowerCase();
            console.log(userInput);
        }
}
console.log(userInput);

switch(userInput){
    case "oatmael":
        if (userInput == "oatmael"){
            prompt ("Heres what you need oatmeal")
        }
}

switch(userInput){
    case "rye":
        if (userInput == "rye"){
            prompt("heres what you need for rye bread")
        }
}

var userInput = prompt ("Bake something else?")();
if (userInput == "no"){
    isPlaying = false;
}
}