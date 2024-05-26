let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn_o = true;

const winPatterns = [
    [0, 1, 2], 
    [0, 3, 6], 
    [0, 4, 8], 
    [1, 4, 7], 
    [2, 5, 8], 
    [2, 4, 6], 
    [3, 4, 5], 
    [6, 7, 8]
];


const enableButton = () => {
    for(let box of boxes){
        box.Disabled = false;
        box.innerText = "";
    }
};

const resetGame = () => {
    turn_o = true;
    enableButton();
    msgContainer.classList.add("hide");
    };



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        //console.log("box was click");
        if(turn_o){
        box.innerText = "O";
        box.style.color = "blue";
        turn_o=false;
        }
        else{
            box.innerText = "X";
            turn_o=true;
        }

        box.Disabled = true;

        checkWinner();
    });

});

const disableButton = () => {
    for(let box of boxes){
        box.Disabled = true;
    }
};

const showWinner = (winner) => {
    msg.innerText = `congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableButton();

};

const checkWinner = () => {
    for(let pattern of winPatterns){

        //console.log(pattern[0], pattern[1], pattern[2]);

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner");

                showWinner(pos1Val);
            }
        }
    }

};

newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);











