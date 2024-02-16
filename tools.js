import ReadLine from "readline";
import Chalk from "chalk";



export function showNumJSONOptions(jsonObject){
    const keys = Object.keys(jsonObject);
    for(var x = 0; x < keys.length; x++){
        console.log(Chalk.blueBright(`${x + 1} for ${keys[x]}`))
    }
}

export function showNumJSONStringOptions(jsonObject){
    const keys = Object.keys(jsonObject);
    for(var x = 0; x < keys.length; x++){
        console.log(Chalk.blueBright(`${x + 1} for ${getJSONValueByIndex(jsonObject, x + 1)}`))
    }
}

export async function getInputBoundedNum(message, errorMessage, lowBound, highBound){
    var vaild = false;
    var input = null;
    while(vaild === false){
        input = await userInput(message);
        if(isNaN(input) === true){ console.log(Chalk.redBright(errorMessage)) }
        else if(input < lowBound || input > highBound){ console.log(Chalk.redBright(errorMessage)) }
        else{ return input }
    }
}

export function userInput(message){
    var rl = ReadLine.createInterface({input: process.stdin,output: process.stdout});
    return new Promise((resolve, reject) => {
        rl.question(Chalk.greenBright(message), (userInput) => {
            rl.close();
            resolve(Number(userInput));
        });
      }); 
}


export function getJSONValueByIndex(jsonObject, index){
    const keys = Object.keys(jsonObject);
    return jsonObject[keys[index - 1]]
}