var userChoice = prompt("ROCK? PAPER? SCISSORS?");
var computerChoice = Math.random();

if (computerChoice <0.34){
    computerChoice = "rock";
}else if(computerChoice <=0.67){
    computerChoice = "paper";
}
else{
    computerChoice = "scissors";
}

var compare = function(choice1,choice2){
    if(choice1===choice2){
        alert("HEY me too!\nThe Result is a Tie!");
        return;
    }
    if(choice1==="rock"){
        if(choice2==="scissors"){
            alert("I chose SCISSORS...\nROCK wins!");
        }
        else{
            alert("I chose PAPER...\nPAPER wins!");
        }
    }
    if(choice1==="paper"){
        if(choice2==="rock"){
            alert("I chose ROCK...\nPAPER wins!");
        }
        else{
            alert("I chose SCISSORS...\nSCISSORS wins!");
        }
    }
    if(choice1==="scissors"){
        if(choice2==="rock"){
            alert("I chose ROCK...\nROCK wins!");
        }
        else{
            alert("I chose PAPER...\nSCISSORS wins!");
        }
    }
};
compare(userChoice,computerChoice);