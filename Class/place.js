class Place {
    constructor(description) {
        this.description = description;
        this.exits = {};
    }

    setExit(direction, neighbor) {
        this.exits[direction] = neighbor;
    }

    getShortDescription() {
        return this.description;
    }

    getLongDescription() {
        return `Você está ${this.description}. Saídas: ${Object.keys(this.exits).join(', ')}.`;
    }

    getExit(direction) {
        return this.exits[direction];
    }
}
module.exports = Place;