import {expect, test} from '@jest/globals';
import { Ship, gameBoard } from './index.js';



test("Ships start off with 0 dmg taken", () => {
    const shipOne = new Ship;
    expect(shipOne.dmgTaken).toBe(0)
})

test("A ship stores its own length", () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3)
});

test("takeHit() method increases dmg taken of the ship hit", () => {
    const ship = new Ship(5)
    ship.takeHit()
    expect(ship.dmgTaken).toBe(1)
});

test("Ship isn't sunk before hit enough times, then sunk once it takes enough DMG", () => {
    const ship = new Ship(2)
    ship.takeHit()
    expect(ship.isSunk()).toBe(false)
    ship.takeHit()
    expect(ship.isSunk()).toBe(true)
});

test("new gameBoard starts empty with only null values", () => {
    const board = gameBoard();
    expect(board.boardArr[0][0]).toBe(null)
    expect(board.boardArr[7][7]).toBe(null)
});

test("Placing a new ship on gameboard", () => {
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

