const readLine =require("readline");

const r1=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});
let player='X';
let crisscross_array=new Array(9).fill(' '); 

const playerTurn=()=> {
    r1.question("Default player is X, Do you want to change it,y or n",function(defaultOrChoose){ //Y,y,O,n
        let choice = defaultOrChoose;
        if(choice==='y'||choice ==='Y'){
            setPlayer();
        }else if(choice==='n'||choice==='N'){
            console.log("Starting player is X");
            printBoard();
            playtic_tac('X');
        }
    })
}
 const setPlayer=()=>{
     r1.question("Default player is X,Do you want to change it,enter O?",function(toWhom){
         changePlayer(toWhom);
     });
 }
 const changePlayer=(toWhom)=>{
     let mov=toWhom.toUpperCase();
     if (mov==='O'|| mov==='X'){
         console.log(`Starting player is ${mov}`);
         player=mov;
         printBoard();
         playtic_tac(mov);
     }
     else setPlayer();
    }
     const playtic_tac=(a)=>{

         let continueplay=false;
         for(let i=0;i<crisscross_array.length;i++){
             if(crisscross_array[i]==' '){
                 continuePlay=true;
             }
         }
         if(continuePlay===true){
             r1.question(`${a} turn`,function(move){
                 gameplayer(move,a);
             });
         }

     };
     const gameplayer=(move,a)=>{
         let moveToCheck=parseInt(move)-1;
        // console.log(moveToCheck);
         for(let i=0;i<crisscross_array.length;i++){
             if(moveToCheck==i&&crisscross_array[i]==' '){
                 crisscross_array[i] =player;
                 if(player==='X'){
                     player='O';
                     playtic_tac(player);
                 }else if(player==='O'){
                     player='X';
                     playtic_tac(player);
                 }
             }
         }
         console.log('\n');
         printBoard();
         const winner=calculateWinner();
         if(winner!=' '){
             console.log(`Winner is ${winner}`);
             process.exit(0);
         }
         playtic_tac();
     }
    const calculateWinner = () => {
            for(let i=0;i<crisscross_array.length;i++){
              if(crisscross_array[i] == crisscross_array[i+1] && crisscross_array[i] == crisscross_array[i+2]){
                return crisscross_array[i];
              }
              else if(crisscross_array[i] == crisscross_array[i+3] && crisscross_array[i] == crisscross_array[i+6]){
                  return crisscross_array[i];
                } 
                else if (crisscross_array[0] == crisscross_array[4] && crisscross_array[0] == crisscross_array[8]) {
                    return crisscross_array[0];
                }
                 else if (crisscross_array[2] == crisscross_array[4] && crisscross_array[2] == crisscross_array[6]) {
                    return crisscross_array[2];
                }
                else{
                    return ' ';
                }
            }
        }
        
        const printBoard=()=>{
            let line = "";
            for (let i = 1; i < 10; i++) {
                line += crisscross_array[i - 1] + ' | ';
                
        
                if (i % 3 === 0 && i<10) {
                    console.log(line);
                    if(i<=6)
                    console.log('____________')
                    line = "";
                }
        }
    }
    printBoard();
    playerTurn();






