var array_input = ["rock","paper","scissors"];

let isPlaying = true;
while (isPlaying){
    var userInput = prompt("Rock, Paper or Scissors?").toLowerCase();

    console.log(`Player picked ${userInput}.`);
    
    var number = Math.floor((Math.random() *3));
    var npc = array_input[number];
    
    console.log(npc);
    
    // if(userInput == npc) {
        //     console.log("Draw!")
        // }
        // else if(userInput == "rock" && npc =="paper") {
            //     console.log("You Lose!");
            // }
            
            switch(userInput){
                case "rock":
                    if(npc == "rock"){
                        console.log("Draw!");
                        
                    }
                    else if(npc == "paper"){
                        console.log("You Lose!");
                        
                    }
                    else if (npc == "scissors"){
                        console.log("You Win!");
                        
                    }
                    break
                    
                    case "paper":
                        if(npc == "paper"){
                            console.log("Draw!");
                            
                        }
                        else if(npc == "scissors"){
                            console.log("You Lose!");
                            
                        }
                        else if (npc == "rock"){
                            console.log("You Win!");
                            
                        }
                        break
                        
                        case "scissors":
                            if(npc == "scissors"){
                                console.log("Draw!");
                                
                            }
                            else if(npc == "rock"){
                                console.log("You Lose!");
                                
                }
                else if (npc == "paper") {
                    console.log("You Win!");
                    
                } 
            break
    default:
            console.log("Try again");
            
    }
    var userInput = prompt("Do you want to continue?").toLowerCase();
    if (userInput == "no"){
    isPlaying = false;
    }   

}
