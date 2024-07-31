class Item {
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
    }

    getDescription() {
        return this.descricao;
    }

    getName() {
        return this.nome;
    }
}
module.exports = Item;