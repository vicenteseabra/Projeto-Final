const Place = require('./place');

class Room extends Place {
    //metodo construtor
    constructor(name, description) {
        super(description);
        this.name = name;
        this.items = [];
        this.clue = '';
    }

    // adciona o item ao array de itens
    addItem(item) {
        this.items.push(item);
    }

    // retira o item do array
    removeItem(itemName) {
        this.items = this.items.filter(item => item.getName() !== itemName);
    }

    // mostra o array de itens contidos no comodo
    getItems() {
        return this.items.length > 0 ? `Itens aqui: ${this.items.map(item => item.getName()).join(', ')}.` : "Nenhum item aqui.";
    }

    // adciona uma dica ao comodo
    setClue(clue) {
        this.clue = clue;
    }

    // mostra a dica contida no comodo
    getClue() {
        return this.clue ? `Dica: ${this.clue}` : '';
    }
}
module.exports = Room;