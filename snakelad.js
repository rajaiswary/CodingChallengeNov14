const rd = require('readline-sync');
var obj = require('./SaLO.js');
console.log(obj);
//console.log(obj.snake[9][0]);
const { updateConstructorTypeNode } = require('typescript');
var score = 0;
var count1 = 0;
var newS ;
function rollDice()
{
        const rnd = Math.floor(Math.random()*6)+1;
        return rnd;
}
while(true)
{
        let inp = rd.question("Enter s to start the game ");
        if(inp == 's')
        {
                var roll = rollDice();
                console.log("Rolled Dice No : "+ roll);
             // game starts only if 1 appears also after starting 1 can appear to ensure that count is given
                if(roll != 1 && score == 0)
                {
                     roll = rollDice;
                     console.log("Roll once more !!");
                }
                else
                {
                    roll = rollDice();
                    if(roll == 6)
                    {
                        roll = rollDice();
                        newS = updateScore(roll);
                        

                    }
                        newS = updateScore(roll);
                        console.log("Your score is : "+newS);
                }
                if(newS >= 100)
                {
                    console.log(" You Won ");
                    break;
                }
                count1++;

                 
        }
        else
        {
                process.stdout.write(" Wrong command ");
                process.exit(0);
        }

}
function updateScore(roll)
{
        score += roll;
       for(var i = 0 ; i<10 ; i++)
       {
          
                if(score == obj.snake[i][0] )
                {
                        score -= obj.snake[i][1];
                        process.stdout.write("You are swallowed");
                }
                if(score == obj.ladder[i][0])
                {
                        score += obj.ladder[i][1];
                        process.stdout.write("You have climbed");
                }
                else
                {
                        break;
                }

       }
       return score;

}
                

