class Item {
    //metodo construtor
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
    }

    // metodo acessador
    getDescription() {
        return this.descricao;
    }

    // metodo acessador
    getName() {
        return this.nome;
    }
}
module.exports = Item;