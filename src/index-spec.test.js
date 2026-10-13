import {expect, test} from '@jest/globals';
import { Ship, gameBoard, Player } from './app-logic.js';



test.skip("Ships start off with 0 dmg taken", () => {
    const shipOne = new Ship;
    expect(shipOne.dmgTaken).toBe(0)
})

test.skip("A ship stores its own length", () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3)
});

test.skip("takeHit() method increases dmg taken of the ship hit", () => {
    const ship = new Ship(5)
    ship.takeHit()
    expect(ship.dmgTaken).toBe(1)
});

test.skip("Ship isn't sunk before hit enough times, then sunk once it takes enough DMG", () => {
    const ship = new Ship(2)
    ship.takeHit()
    expect(ship.isSunk()).toBe(false)
    ship.takeHit()
    expect(ship.isSunk()).toBe(true)
});

test.skip("new gameBoard starts empty with only null values", () => {
    const board = gameBoard();
    expect(board.boardArr[0][0]).toBe(null)
    expect(board.boardArr[7][7]).toBe(null)
});

test.skip("Placing a new ship on gameboard", () => {
    const board = gameBoard();
    board.placeShip(2, [0,0], false)
    expect(board.boardArr[0][1]).not.toBe(null)
});

test("Placing a ship in an already taken space", () => {
    const board = gameBoard();
    board.placeShip(1, [0,0, true])
    expect(board.placeShip(1, [0,0])).toBe("Coordinates occupied, pick a new spot for your ship")
    expect(board.boardArr[0][0]).not.toBe(null)
})

test("Creating a new human player with name Tom", () => {
    const playerOne = new Player("Tom", true);
    expect(playerOne.name).toBe("Tom");
    expect(playerOne.isPerson).toBe(true)
    expect(playerOne.board.playerFleet[0]).toBe(undefined)
})

