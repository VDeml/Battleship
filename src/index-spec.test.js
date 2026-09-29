import {expect, test} from '@jest/globals';
import { Ship, shipOne, test1 } from './index.js';

const shipTwo = new Ship
shipTwo.takeHit()

test("Test the Ship damage taken property", () => {
    expect(shipTwo.dmgTaken).toEqual(1)
});

test("Test the hit Ship method", () => {
    expect(shipTwo.takeHit()).toEqual(2)
});