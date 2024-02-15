
import { gameTypes, gameStudios } from "./gVars.js"; 
import * as Tools from "./tools.js";
import { GameTypes } from "./classes/gameTypes.js"; 
import { GameStudios } from "./classes/gameStudios.js"; 

//This is a function that will run on its own, we need this so we have access to async
(async()=>{

    Tools.showNumJSONStringOptions(gameStudios);
    var studioSelection = await Tools.userInput("Please select from the prior list: ");
    studioSelection = Tools.getJSONValueByIndex(gameStudios, studioSelection);
    var gameStudioFactory = new GameStudios();
    var gameStudio = gameStudioFactory.makeStudio(studioSelection);

    
    
    

})()