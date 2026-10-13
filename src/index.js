import "./styles.css"
import { Ship, gameBoard, Player } from './app-logic.js';
import { buildBoard } from './GUI.js';

const gameController = () => {
    // create player One (human)
    const playerOne = new Player("Human", true)
    // create player Two (computer)
    const playerTwo = new Player("Computer", false)
    // we have the two players, now populate both boards
    // Innitialy with some default values
    // for player
    playerOne.board.placeShip(3, [0,0], true)
    playerOne.board.placeShip(4, [4,0], true)
    playerOne.board.placeShip(1, [0,7], true)
    playerOne.board.placeShip(2, [3,1], false)
    playerOne.board.placeShip(5, [7,3], false)
    buildBoard(playerOne.board.boardArr, "playerBoard")

    // for computer
    playerTwo.board.placeShip(3, [0,0],false)
    playerTwo.board.placeShip(2, [0,6], false)
    playerTwo.board.placeShip(4, [1,0], false)
    playerTwo.board.placeShip(5, [3,0], true)
    playerTwo.board.placeShip(1, [7,7], true)
    buildBoard(playerTwo.board.boardArr, "enemyBoard")

    return { playerOne, playerTwo }
}

gameController();