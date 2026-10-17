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
    // for player
    for(let i = 1; i < 6; i++) {
        let shipPlaced = playerOne.board.placeShip(i, `ship${i}`, randomCoords(playerOne.board.boardArr), randomizeShipOrientation())
        while(shipPlaced === "Invalid") {
            shipPlaced = playerOne.board.placeShip(i, `ship${i}`, randomCoords(playerOne.board.boardArr), randomizeShipOrientation())
        }
    }
    
    // for computer
     for(let j = 1; j < 6; j++) {
        let shipPlaced = playerTwo.board.placeShip(j, `ship + ${j}`, randomCoords(playerTwo.board.boardArr), randomizeShipOrientation())
        while(shipPlaced === "Invalid") {
            shipPlaced = playerTwo.board.placeShip(j, `ship + ${j}`, randomCoords(playerTwo.board.boardArr), randomizeShipOrientation())
        }
    }

    // build GUI what the player sees
    buildBoard(playerOne, playerTwo, playRound, resetGame)

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
            destroyContent(document.querySelector(".wrapper"))
            buildBoard(playerOne, playerTwo, playRound, resetGame)
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

    function randomizeShipOrientation() {
        return Math.random() < 0.5;
    }

    return { playerOne, playerTwo }
}

function resetGame() {
    destroyContent(document.querySelector(".wrapper"))
    gameController()
}
const game = gameController();