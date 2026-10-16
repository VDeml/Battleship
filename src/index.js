import "./styles.css"
import { Ship, gameBoard, Player } from './app-logic.js';
import { buildBoard, destroyContent } from './GUI.js';




const gameController = () => {
    // create player One (human)
    const playerOne = new Player("Human", true)
    // create player Two (computer)
    const playerTwo = new Player("Computer", false)
    let gameOver = false;
    // we have the two players, now populate both boards
    // Innitialy with some default values
    // for player
    playerOne.board.placeShip(3, [0,0], false)
    playerOne.board.placeShip(4, [4,0], true)
    playerOne.board.placeShip(1, [0,7], true)
    // for computer
    playerTwo.board.placeShip(3, [0,0], false)
    playerTwo.board.placeShip(1, [0,6], false)
    playerTwo.board.placeShip(4, [1,0], false)

    // build GUI what the player sees
    buildBoard(playerOne, playerTwo, playRound)

    function playRound(enemy, coords) {
        let attackResult;
        let computersAttackResult;
        // round plays only if game is not over
        if(!gameOver) {
            attackResult = enemy.board.recieveAttack(coords)
            if(attackResult === "Game Over!") {
                gameOver = true
            }
            // if attack was a succesful hit / miss and game still continues, let computer make a move
            if(attackResult !== "Invalid" && attackResult !== "Game Over!") {
                let computersAttackCoords = randomCoords(playerOne.board.boardArr)
                while(playerOne.board.shotsArr[computersAttackCoords[0]][computersAttackCoords[1]] === true) {
                    computersAttackCoords = randomCoords(playerOne.board.boardArr)
                }
                computersAttackResult = playerOne.board.recieveAttack(computersAttackCoords)
                if(computersAttackResult === "Game Over!") {
                    gameOver = true;
                }
            }
            destroyContent(document.querySelector(".gameBoards"))
            buildBoard(playerOne, playerTwo, playRound)
        }
    };

    function randomCoords(board) {
        let result = []
        let yCoord = Math.floor(Math.random() * board.length)
        result.push(yCoord);
        let xCoord = Math.floor(Math.random() * board[yCoord].length);
        result.push(xCoord);
        return result
    }

    return { playerOne, playerTwo }
}

const game = gameController();