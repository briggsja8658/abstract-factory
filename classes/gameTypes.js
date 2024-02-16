
import { gameTypes, gameNames, gamingPlatforms } from "../gVars.js";
import * as Tools from "../tools.js"


export class GameTypes{
    constructor(){
        this.name = null;
        this.release = null;
        this.platform = null;
    }
    makeGame(selectedGame){
        if(selectedGame === gameTypes.fps){ return new FPS() }
        else if(selectedGame === gameTypes.rpg){ return new RPG() }
        else if(selectedGame === gameTypes.sim){ return new Sim() }
        else if(selectedGame === gameTypes.jrpg){ return new JRPG() }
        else if(selectedGame === gameTypes.racing){ return new Racing() }
    }
}

class FPS extends GameTypes{
    constructor(){
        super();
        this.name = Tools.getJSONValueByIndex(gameNames, Math.floor(Math.random() * 30) + 1);
        this.release = Math.floor(Math.random(2024 - 1990) + 1990);
        this.platform = Tools.getJSONValueByIndex(gamingPlatforms, Math.floor(Math.random() * 29) + 1);
    }
}

class RPG extends GameTypes{
    constructor(){
        super();
        super.name = Tools.getJSONValueByIndex(gameNames, Math.floor(Math.random(30)));
        super.release = Math.floor(Math.random(2024 - 1990) + 1990);
        super.platform = Tools.getJSONValueByIndex(gameNames, Math.floor(Math.random(29)));
    }
}

class JRPG extends GameTypes{
    constructor(){
        super();
        super.name = Tools.getJSONValueByIndex(gameNames, Math.floor(Math.random(30)));
        super.release = Math.floor(Math.random(2024 - 1990) + 1990);
        super.platform = Tools.getJSONValueByIndex(gameNames, Math.floor(Math.random(29)));
    }
}

class Sim extends GameTypes{
    constructor(){
        super();
        super.name = Tools.getJSONValueByIndex(gameNames, Math.floor(Math.random(30)));
        super.release = Math.floor(Math.random(2024 - 1990) + 1990);
        super.platform = Tools.getJSONValueByIndex(gameNames, Math.floor(Math.random(29)));
    }
}

class Racing extends GameTypes{
    constructor(){
        super();
        super.name = Tools.getJSONValueByIndex(gameNames, Math.floor(Math.random(30)));
        super.release = Math.floor(Math.random(2024 - 1990) + 1990);
        super.platform = Tools.getJSONValueByIndex(gameNames, Math.floor(Math.random(29)));
    }
}