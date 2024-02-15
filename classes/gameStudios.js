
import { gameStudios, gameTypes } from "../gVars.js";
import { GameTypes } from "./gameTypes.js";
import * as Tools from "../tools.js";


export class GameStudios {
    constructor() {
        this.name = null;
        this.yearEst = null;
        this.numOfEmployees = null;
        this.locations = null;
        this.numOfGames = null;
    }
    makeStudio(studioSelection) {
        if (gameStudios.ea === studioSelection) { return new EA(); }
        else if (gameStudios.cap === studioSelection) { return new Capcom(); }
        else if (gameStudios.rock === studioSelection) { return new Rockstar(); }
        else if (gameStudios.ubisoft === studioSelection) { return new Ubisoft(); }
        else if (gameStudios.square === studioSelection) { return new SquareEnix(); }
        else if (gameStudios.bethesda === studioSelection) { return new Bethesda(); }
    }
    async makeGame(){
        Tools.showNumJSONOptions(gameTypes); //Show options of game types
        var gameSelection = await Tools.userInput("Please select from the prior list: ");
        gameSelection = Tools.getJSONValueByIndex(gameTypes, gameSelection);
        var gamesTypes = new GameTypes();
        var currentGame = gamesTypes.makeGame(gameSelection);4
        console.log(currentGame);
    }
    
}

class EA extends GameStudios {
    constructor() {
        super();
        this.lootBoxes = true;
        this.gameSeries = {
            "sports": {
                "madden": {
                    "start": 1989,
                    "numInSeries": 40,
                    "gameType" : super.makeGame()
                },
                "fifa": {
                    "start": 1993,
                    "numberInSeries": 35,
                    "gameType" : super.makeGame()
                }
            }
        }
    }
    
}

class Capcom extends GameStudios {
    constructor() {
        super();
        this.gameSeries = {
            "magaMan": {
                "start": 1987,
                "numInSeries": 130,
                "gameType" : super.makeGame()
            }
        }
    }

}

class Rockstar extends GameStudios {
    constructor() {
        super();
        this.gameSeries = {
            "Grand Theft Auto": {
                "start": 1997,
                "numInSeries": 15,
                "gameType" : super.makeGame()
            },
            "Red Dead": {
                "start": 2004,
                "numInSeries": 3,
                "gameType" : super.makeGame()
            },
            "Max Payne": {
                "start": 2001,
                "numInSeries": 3,
                "gameType" : super.makeGame()
            },
            "Bully": {
                "start": 2006,
                "numInSeries": 1,
                "gameType" : super.makeGame()
            },
            "L.A. Noire": {
                "start": 2011,
                "numInSeries": 1,
                "gameType" : super.makeGame()
            },
            "Midnight Club": {
                "start": 2000,
                "numInSeries": 4,
                "gameType" : super.makeGame()
            }
        }
    }
}

class Ubisoft extends GameStudios {
    constructor() {
        super();
        this.gameSeries = {
            "Assassin's Creed": {
                "start": 2007,
                "numInSeries": 23,
                "gameType" : super.makeGame()
            },
            "Far Cry": {
                "start": 2004,
                "numInSeries": 6,
                "gameType" : super.makeGame()
            },
            "Tom Clancy's Rainbow Six": {
                "start": 1998,
                "numInSeries": 18,
                "gameType" : super.makeGame()
            },
            "Tom Clancy's Ghost Recon": {
                "start": 2001,
                "numInSeries": 16,
                "gameType" : super.makeGame()
            },
            "Watch Dogs": {
                "start": 2014,
                "numInSeries": 3,
                "gameType" : super.makeGame()
            },
            "Just Dance": {
                "start": 2009,
                "numInSeries": 14,
                "gameType" : super.makeGame()
            },
            "Prince of Persia": {
                "start": 1989,
                "numInSeries": 14,
                "gameType" : super.makeGame()
            },
            "Rayman": {
                "start": 1995,
                "numInSeries": 45,
                "gameType" : super.makeGame()
            }
        }
    }
}

class SquareEnix extends GameStudios {
    constructor() {
        super();
        (async()=>{
            this.gameSeries = {
                "finalFantasy": {
                    "start": 1987,
                    "numInSeries": 16,
                    "gameType" : await super.makeGame()
                },
                "dragonQuest": {
                    "start": 1986,
                    "numInSeries": 80,
                    "gameType" : await super.makeGame()
                },
                "kingdomHearts": {
                    "start": 2002,
                    "numInSeries": 13,
                    "gameType" : await super.makeGame()
                },
                "tombRaider": {
                    "start": 1996,
                    "numInSeries": 12,
                    "gameType" : await super.makeGame()
                },
                "chrono": {
                    "start": 1995,
                    "numInSeries": 3,
                    "gameType" : await super.makeGame()
                },
                "mana": {
                    "start": 1991,
                    "numInSeries": 11,
                    "gameType" : await super.makeGame()
                }
            }
        })()
    }
}

class Bethesda extends GameStudios {
    constructor() {
        super();
        this.gameSeries = {
            "The Elder Scrolls": {
                "start": 1994,
                "numInSeries": 5,
                "gameType" : super.makeGame()
            },
            "Fallout": {
                "start": 1997,
                "numInSeries": 7,
                "gameType" : super.makeGame()
            },
            "Doom": {
                "start": 1993,
                "numInSeries": 12,
                "gameType" : super.makeGame()
            },
            "Wolfenstein": {
                "start": 1981,
                "numInSeries": 11,
                "gameType" : super.makeGame()
            },
            "Dishonored": {
                "start": 2012,
                "numInSeries": 2,
                "gameType" : super.makeGame()
            },
            "Prey": {
                "start": 2006,
                "numInSeries": 2,
                "gameType" : super.makeGame()
            }
        }
    }
}