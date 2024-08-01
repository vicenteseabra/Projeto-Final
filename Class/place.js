class Place {
    //metodo construtor
    constructor(description) {
        this.description = description;
        this.exits = {};
    }

    // atribue o comodo a direçao
    setExit(direction, neighbor) {
        this.exits[direction] = neighbor;
    }

    // mostra qual é o comodo
    getShortDescription() {
        return this.description;
    }

    // mostra o comodo e as saidas nele
    getLongDescription() {
        return `Você está ${this.description}. Saídas: ${Object.keys(this.exits).join(', ')}.`;
    }

    // retorna a saida atribuida a direçao
    getExit(direction) {
        return this.exits[direction];
    }
}
module.exports = Place;