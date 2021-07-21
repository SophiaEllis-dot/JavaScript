var array_input = ["heads" , "tails"];
let isPlaying = true;
 
while (isPlaying) {
    var userInput = prompt("Heads or Tails?").toLowerCase();

    var number = Math.floor((Math.random() *2));
    var coin = array_input[number];

    console.log(coin);

    switch(userInput){
        case "heads":
            if (coin =="heads"){
                console.log("win")
            }
            else {console.log("You Lose!")} 
        break    

        case "tails":
            if (coin == "tails"){
                console.log("win")
            }
            else {console.log("You Lose!")} 
        break       
            
    }
    var userInput = prompt("Again?").toLowerCase();
    if (userInput == "no"){
        isPlaying = false;
    }
}


