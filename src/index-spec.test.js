import {expect, test} from '@jest/globals';
import { Ship, shipOne, test1 } from './index.js';

const shipOne = new Ship(1)


test.skip("Test the Ship damage taken property", () => {
    expect(shipOne.dmgTaken).toEqual(1)
});

test.skip("Test the hit Ship method", () => {
    expect(shipOne.takeHit()).toEqual(2)
});

test("Check ship length", () => {
    expect(shipOne.takeHit()).toEqual(2)
});

