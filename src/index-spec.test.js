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

// place a ship of length 3 at coords [0,0], [1,0], [2,0]
gameBoard.placeShip(3, [0,0])

test("Test placeShip function", () => {
    expect(gameBoard.placeShip(3, [0,0])).toEqual("Coordinates occupied, pick a new spot for your ship")
});

test.skip("Fire a shot at an empty tile, get 'You missed!' returned", () => {
    expect(gameBoard.recieveAttack([1,1])).toEqual("You missed!")
})
gameBoard.recieveAttack([1,0])


test("Fire a shot, hit a ship, return dmg taken of that ship", () => {
    expect(gameBoard.recieveAttack([1,0])).toEqual("Ouch, beeh hit for: 2!")
    expect(gameBoard.recieveAttack([1,0])).toEqual("Ouch, beeh hit for: 3!")
})

test("Fire a shot twice at the same spot, 1st hits, 2nd throws an error", () => {
    expect(gameBoard.recieveAttack([1,1])).toEqual("You missed")
    expect(gameBoard.recieveAttack([1,1])).toEqual("You cant shoot here mate")
})
