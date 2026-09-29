class Ship {
    constructor(length) {
        this.length = length
        this.dmgTaken = 0
        this.sunk = false
    }
    takeHit() {
        this.dmgTaken ++
        return this.dmgTaken
    }
}

const shipOne = new Ship

export { Ship, shipOne }
