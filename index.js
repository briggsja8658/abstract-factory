
import { gameTypes, gameStudios } from "./gVars.js"; 
import * as Tools from "./tools.js";
import { GameStudios } from "./classes/gameStudios.js"; 

//This is a function that will run on its own, we need this so we have access to async
(async()=>{

    Tools.showNumJSONStringOptions(gameStudios);
    var studioSelection = await Tools.getInputBoundedNum(
        "Please select from the prior list: ",
        `Please enter a number between 1-${Object.keys(gameStudios).length}`,
        1, Object.keys(gameStudios).length
    );

    Tools.showNumJSONOptions(gameTypes); //Show options of game types
    var gameSelection = await Tools.getInputBoundedNum(
        "Please select from the prior list: ",
        `Please enter a number between 1-${Object.keys(gameTypes).length}`,
        1, Object.keys(gameTypes).length
    );


    studioSelection = Tools.getJSONValueByIndex(gameStudios, studioSelection);
    var gameStudioFactory = new GameStudios();
    gameStudioFactory.makeStudio(studioSelection, gameSelection)
    .then((gameStudio)=>{
        console.log(gameStudio);
    });
})()