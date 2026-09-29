class Ship {
    constructor(length) {
        this.length = length
        this.dmgTaken = 0
        this.sunk = false
    };
    takeHit() {
        this.dmgTaken ++
        return this.dmgTaken
    };
    isSunk() {
        return this.dmgTaken === this.length
    }
}


export { Ship }
