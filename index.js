
import { gameTypes } from "./gVars.js"; 
import * as Tools from "./tools.js";
import { Games } from "./classes/games.js"; 

//This is a function that will run on its own, we need this so we have access to async
(async()=>{
    Tools.showNumJSONOptions(gameTypes);
    var gameSelection = await Tools.userInput("Please select from the prior list: ");
    gameSelection = Tools.getJSONValueByIndex(gameTypes, gameSelection);
    var games = new Games();
    var currentGame = games.makeGame(gameSelection);
    console.log(currentGame);

})()