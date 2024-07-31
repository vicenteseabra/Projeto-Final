const Place = require('./place');

class Room extends Place {
    constructor(name, description) {
        super(description);
        this.name = name;
        this.items = [];
        this.clue = '';
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(itemName) {
        this.items = this.items.filter(item => item.getName() !== itemName);
    }

    getItems() {
        return this.items.length > 0 ? `Itens aqui: ${this.items.map(item => item.getName()).join(', ')}.` : "Nenhum item aqui.";
    }

    setClue(clue) {
        this.clue = clue;
    }

    getClue() {
        return this.clue ? `Dica: ${this.clue}` : '';
    }
}
module.exports = Room;