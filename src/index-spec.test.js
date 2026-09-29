import {expect, test} from '@jest/globals';
import { Ship, gameBoard } from './index.js';

const shipOne = new Ship(1)



test.skip("Test the Ship damage taken property", () => {
    expect(shipOne.dmgTaken).toEqual(0)
});

test.skip("Test the hit Ship method", () => {
    expect(shipOne.takeHit()).toEqual(1)
});

test.skip("Check ship length", () => {
    expect(shipOne.length).toEqual(1)
});

test("Test gameBoard avalibility", () => {
    expect(gameBoard.boardArr[7][7]).toEqual(null)
});

// place a ship of length 2 at coords [0,0] -> [1,0]
gameBoard.placeShip(3, [0,0])

test("Test placeShip function", () => {
    expect(gameBoard.placeShip(3, [0,0])).toEqual("Coordinates occupied, pick a new spot for your ship")
});
