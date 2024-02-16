
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
    async makeStudio(studioSelection, gameSelection) {
        if (gameStudios.ea === studioSelection) { return new EA(gameSelection); }
        else if (gameStudios.cap === studioSelection) { return new Capcom(gameSelection); }
        else if (gameStudios.rock === studioSelection) { return new Rockstar(gameSelection); }
        else if (gameStudios.ubisoft === studioSelection) { return new Ubisoft(gameSelection); }
        else if (gameStudios.square === studioSelection) { return new SquareEnix(gameSelection); }
        else if (gameStudios.bethesda === studioSelection) { return new Bethesda(gameSelection); }
    }
    makeGame(gameSelection) {
        //gameSelection = Tools.getJSONValueByIndex(gameTypes, gameSelection);
        var gamesTypes = new GameTypes();
        var newGame = gamesTypes.makeGame(gameSelection);
        return newGame;
    }

}

class EA extends GameStudios {
    constructor(gameSelection) {
        super();
        super.name = gameStudios.ea;
        super.yearEst = Math.floor(Math.random(2024 - 1980) + 1980);
        super.numOfEmployees = Math.floor(Math.random(2000 - 1) + 1);
        super.locations = "Places";
        super.numOfGames = Math.floor(Math.random(2000 - 1) + 1);
        this.lootBoxes = true;

        this.gameSeries = {
            "sports": {
                "madden": {
                    "start": 1989,
                    "numInSeries": 40,
                    "gameType": super.makeGame(gameSelection)
                },
                "fifa": {
                    "start": 1993,
                    "numberInSeries": 35,
                    "gameType": super.makeGame(gameSelection)
                }
            }
        }

    }

}

class Capcom extends GameStudios {
    constructor(gameSelection) {
        super();
        super.name = gameStudios.cap;
        super.yearEst = Math.floor(Math.random(2024 - 1980) + 1980);
        super.numOfEmployees = Math.floor(Math.random(2000 - 1) + 1);
        super.locations = "Places";
        super.numOfGames = Math.floor(Math.random(2000 - 1) + 1);
        this.gameSeries = {
            "magaMan": {
                "start": 1987,
                "numInSeries": 130,
                "gameType": super.makeGame(gameSelection)
            }
        }

    }

}

class Rockstar extends GameStudios {
    constructor(gameSelection) {
        super();

        super.name = gameStudios.rock;
        super.yearEst = Math.floor(Math.random(2024 - 1980) + 1980);
        super.numOfEmployees = Math.floor(Math.random(2000 - 1) + 1);
        super.locations = "Places";
        super.numOfGames = Math.floor(Math.random(2000 - 1) + 1);
        this.gameSeries = {
            "Grand Theft Auto": {
                "start": 1997,
                "numInSeries": 15,
                "gameType": super.makeGame(gameSelection)
            },
            "Red Dead": {
                "start": 2004,
                "numInSeries": 3,
                "gameType": super.makeGame(gameSelection)
            },
            "Max Payne": {
                "start": 2001,
                "numInSeries": 3,
                "gameType": super.makeGame(gameSelection)
            },
            "Bully": {
                "start": 2006,
                "numInSeries": 1,
                "gameType": super.makeGame(gameSelection)
            },
            "L.A. Noire": {
                "start": 2011,
                "numInSeries": 1,
                "gameType": super.makeGame(gameSelection)
            },
            "Midnight Club": {
                "start": 2000,
                "numInSeries": 4,
                "gameType": super.makeGame(gameSelection)
            }
        }

    }
}

class Ubisoft extends GameStudios {
    constructor(gameSelection) {
        super();

        super.name = gameStudios.ubisoft;
        super.yearEst = Math.floor(Math.random(2024 - 1980) + 1980);
        super.numOfEmployees = Math.floor(Math.random(2000 - 1) + 1);
        super.locations = "Places";
        super.numOfGames = Math.floor(Math.random(2000 - 1) + 1);
        this.gameSeries = {
            "Assassin's Creed": {
                "start": 2007,
                "numInSeries": 23,
                "gameType": super.makeGame(gameSelection)
            },
            "Far Cry": {
                "start": 2004,
                "numInSeries": 6,
                "gameType": super.makeGame(gameSelection)
            },
            "Tom Clancy's Rainbow Six": {
                "start": 1998,
                "numInSeries": 18,
                "gameType": super.makeGame(gameSelection)
            },
            "Tom Clancy's Ghost Recon": {
                "start": 2001,
                "numInSeries": 16,
                "gameType": super.makeGame(gameSelection)
            },
            "Watch Dogs": {
                "start": 2014,
                "numInSeries": 3,
                "gameType": super.makeGame(gameSelection)
            },
            "Just Dance": {
                "start": 2009,
                "numInSeries": 14,
                "gameType": super.makeGame(gameSelection)
            },
            "Prince of Persia": {
                "start": 1989,
                "numInSeries": 14,
                "gameType": super.makeGame(gameSelection)
            },
            "Rayman": {
                "start": 1995,
                "numInSeries": 45,
                "gameType": super.makeGame(gameSelection)
            }
        }

    }
}

class SquareEnix extends GameStudios {
    constructor(gameSelection) {
        super();

        super.name = gameStudios.square;
        super.yearEst = Math.floor(Math.random(2024 - 1980) + 1980);
        super.numOfEmployees = Math.floor(Math.random(2000 - 1) + 1);
        super.locations = "Places";
        super.numOfGames = Math.floor(Math.random(2000 - 1) + 1);
        this.gameSeries = {
            "finalFantasy": {
                "start": 1987,
                "numInSeries": 16,
                "gameType": super.makeGame(gameSelection)
            },
            "dragonQuest": {
                "start": 1986,
                "numInSeries": 80,
                "gameType": super.makeGame(gameSelection)
            },
            "kingdomHearts": {
                "start": 2002,
                "numInSeries": 13,
                "gameType": super.makeGame(gameSelection)
            },
            "tombRaider": {
                "start": 1996,
                "numInSeries": 12,
                "gameType": super.makeGame(gameSelection)
            },
            "chrono": {
                "start": 1995,
                "numInSeries": 3,
                "gameType": super.makeGame(gameSelection)
            },
            "mana": {
                "start": 1991,
                "numInSeries": 11,
                "gameType": super.makeGame(gameSelection)
            }
        }

    }
}

class Bethesda extends GameStudios {
    constructor(gameSelection) {
        super();

        super.name = gameStudios.bethesda;
        super.yearEst = Math.floor(Math.random(2024 - 1980) + 1980);
        super.numOfEmployees = Math.floor(Math.random(2000 - 1) + 1);
        super.locations = "Places";
        super.numOfGames = Math.floor(Math.random(2000 - 1) + 1);
        this.gameSeries = {
            "The Elder Scrolls": {
                "start": 1994,
                "numInSeries": 5,
                "gameType": super.makeGame(gameSelection)
            },
            "Fallout": {
                "start": 1997,
                "numInSeries": 7,
                "gameType": super.makeGame(gameSelection)
            },
            "Doom": {
                "start": 1993,
                "numInSeries": 12,
                "gameType": super.makeGame(gameSelection)
            },
            "Wolfenstein": {
                "start": 1981,
                "numInSeries": 11,
                "gameType": super.makeGame(gameSelection)
            },
            "Dishonored": {
                "start": 2012,
                "numInSeries": 2,
                "gameType": super.makeGame(gameSelection)
            },
            "Prey": {
                "start": 2006,
                "numInSeries": 2,
                "gameType": super.makeGame(gameSelection)
            }
        }

    }
}