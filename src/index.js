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
        return this.dmgTaken === this.length
    };

}
// IIFE factory function for the gameboard
const gameBoard = (() => {
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
    let hitsArr = []
    for(let k = 0; k < SIZE; k++) {
        hitsArr.push([])
        for(let l = 0; l < SIZE; l++) {
            hitsArr[k].push(null)
        }
    };


    // function to place a ship on the board, provided with the [x,y] coordinates
    const placeShip = (sizeOfShip, coords, horizontalRotation = true) => {
        const xCoordinate = coords[0];
        const yCoordinate = coords[1];
        const shipLength = sizeOfShip
        const newShip = new Ship(shipLength)
        for(let i = 0; i < shipLength; i++) {
            if(boardArr[xCoordinate + i][yCoordinate] !== null) {
                return "Coordinates occupied, pick a new spot for your ship"
            }
            if(horizontalRotation) {
                boardArr[xCoordinate + i][yCoordinate] = newShip
            }
            else if(!horizontalRotation) {
                boardArr[xCoordinate][yCoordinate + i] = newShip
            }
        }
    };

    const recieveAttack = (coordinates) => {
        const tileHit = boardArr[coordinates[0]][coordinates[1]]
        // if there already is a value, we got a repeat shot, so get an error msg saying something like "Shoot somewhere else dummy!"
        if(hitsArr[coordinates[0]][coordinates[1]]) {
            return "You cant shoot here mate"
        }
        // else if value is falsy, that means we can record the shot
        else {
            // if falsy, there is no ship here, you missed, and record this tile as getting shot once in the hitsArr
            if(!tileHit) {
                hitsArr[coordinates[0]][coordinates[1]] = true
                return "You missed"
            }
            // Else there is a ship here, record it getting shot
            else {
                return `Ouch, beeh hit for: ${tileHit.takeHit()}!`
            }
        }
    };

    return { boardArr, placeShip, recieveAttack }
})();


export { Ship, gameBoard }
