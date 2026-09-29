class Ship {
    constructor(length) {
        this.length = length
        this.dmgTaken = 0
        this.sunk = false
    };
    takeHit() {
        this.dmgTaken ++
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
    let boardArr = []
    for(let i = 0; i < SIZE; i++) {
        boardArr.push([])
        for(let j = 0; j < SIZE; j++) {
            boardArr[i].push(null)
        }
    }

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

    return { boardArr, placeShip }
})();


export { Ship, gameBoard }
