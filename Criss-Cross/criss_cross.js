const readline=require("readline");

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let player='X';

// let crisscross=[
//     ' ',' ',' ',
//     ' ',' ',' ',
//     ' ',' ',' '
// ];

let a= new Array(9).fill(' ');

const defaultPlayer=()=>{
r1.question("Default player is X, Do you want to change it ,y or n",function(defaultOrChoose){
    let choice=defaultOrChoose.toLowerCase();
    if(choice==='y'){
        setPlayer();
    }
    else if(choice==='n'){
        console.log("Starting player is X");
        printBoard();
        playCrissCross();
    }else{
        defaultPlayer();
    }
})
}

const setPlayer =()=>{
    r1.question("Default player is X,Do you want to change it,enter O?",function(whichPlayer){
        changePlayer(whichPlayer);
    });
}

const changePlayer =()=>{
    let mov=playerChange.toUpperCase();
    let (mov==='O'||mov==='X'){
        console.log(`Starting player is ${mov}`);
        player=mov;
    }
}





