class Ship {
    constructor(length) {
        this.length = length
        this.dmgTaken = 0
        this.sunk = false
    };
    takeHit() {
        this.dmgTaken ++
        if(this.dmgTaken === this.length) {
            this.sunk = true
        }
        return this.dmgTaken
    };
    isSunk() {
        return this.sunk
    };
}

// factory function for the gameboard
const gameBoard = () => {
    // initialize a board represented by a SIZE x SIZE grid
    const SIZE = 8
    // Board for recording ship locations
    let boardArr = []
    for(let i = 0; i < SIZE; i++) {
        boardArr.push([])
        for(let j = 0; j < SIZE; j++) {
            boardArr[i].push(null)
        }
    };
    // Board for recording shots attempted by a player
    let shotsArr = []
    for(let k = 0; k < SIZE; k++) {
        shotsArr.push([])
        for(let l = 0; l < SIZE; l++) {
            shotsArr[k].push(null)
        }
    };

    // an array to keep track of all of the player's ships and their "sunk" status
    let playerFleet = []

    // function to place a ship on the board, provided with the [x,y] coordinates
    const placeShip = (sizeOfShip, coords, horizontalRotation = true) => {
        const xCoordinate = coords[0];
        const yCoordinate = coords[1];
        const shipLength = sizeOfShip
        const newShip = new Ship(shipLength)
        if (xCoordinate < 0 || xCoordinate >= SIZE || yCoordinate < 0 || yCoordinate >= SIZE) {
            return "Trying to place ship outside battlefield"
        }
        if (horizontalRotation) {
            if (xCoordinate + shipLength > SIZE) {
                return "Trying to place ship outside battlefield"
            }
        } 
        else {
            if (yCoordinate + shipLength > SIZE) {
                return "Trying to place ship outside battlefield"
            }
        }
        // First for loop checking if boardArr is free for ship placement
        for(let i = 0; i < shipLength; i++) {
            if(horizontalRotation && boardArr[xCoordinate + i][yCoordinate] !== null) {
                return "Coordinates occupied, pick a new spot for your ship"
            }
            if(!horizontalRotation && boardArr[xCoordinate][yCoordinate + i] !== null) {
                return "Coordinates occupied, pick a new spot for your ship"
            }
        }       
        // Given the first for loop finished, the boardArr is free and we can place our ship
        for(let j = 0; j < shipLength; j++) {
            if(horizontalRotation) {
                boardArr[xCoordinate + j][yCoordinate] = newShip
            }
            else if(!horizontalRotation) {
                boardArr[xCoordinate][yCoordinate + j] = newShip
            }
        }
        playerFleet.push(newShip)
    };

    const recieveAttack = (coordinates) => {
        const tileHit = boardArr[coordinates[0]][coordinates[1]]
        // if there already is a value, we got a repeat shot, so get an error msg saying something like "Shoot somewhere else dummy!"
        if(shotsArr[coordinates[0]][coordinates[1]]) {
            return "You cant shoot here mate"
        }
        // else if value is falsy, that means we can record the shot
        else {
            // if falsy, there is no ship here, you missed, and record this tile as getting shot once in the shotsArr
            if(!tileHit) {
                shotsArr[coordinates[0]][coordinates[1]] = true
                return "You missed!"
            }
            // Else there is a ship here, record it getting shot
            else {
                // record hit, check for GAME OVER and if ship has been sunk
                tileHit.takeHit()
                shotsArr[coordinates[0]][coordinates[1]] = true
                if(tileHit.sunk) {
                    if(checkForGameOver()) {
                        return "Game Over!"
                    }else return "Ship sunk!"
                }
                else {
                    return `Ouch, beeh hit for: ${tileHit.dmgTaken}!`
                }
            }
        }
    };

    const checkForGameOver = () => {
        return playerFleet.every((ship) => ship.sunk)
    }

    return { boardArr, placeShip, recieveAttack, checkForGameOver, playerFleet }
};

class Player {
    constructor(name, isPerson = false) {
        this.name = name
        // to differentiate between a "person" and "computer" type? Default setting is for computer so false
        this.isPerson = isPerson
        this.board = gameBoard()
    };
} 

export { Ship, gameBoard, Player }