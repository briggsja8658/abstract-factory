
import { gameTypes } from "../gVars.js";


export class GameTypes{
    constructor(){
        this.name = null;
        this.release = null;
        this.platform = null;
        this.studio = null;
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
    }
}

class RPG extends GameTypes{
    constructor(){
        super();
    }
}

class JRPG extends GameTypes{
    constructor(){
        super();
    }
}

class Sim extends GameTypes{
    constructor(){
        super();
    }
}

class Racing extends GameTypes{
    constructor(){
        super();
    }
}