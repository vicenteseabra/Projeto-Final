const Room = require('./room');
const Item = require('./item');
const Player = require('./player');

class Game {
    constructor(playerName) {
        this.player = new Player(playerName);
        this.createRooms();
        this.currentRoom = this.livingRoom;
    }

    createRooms() {
        let livingRoom = new Room("Sala de Estar", "na sala de estar");
        let kitchen = new Room("Cozinha", "na cozinha");
        let study = new Room("Escritório", "no escritório");
        let bedroom = new Room("Quarto", "no quarto");
        let bathroom = new Room("Banheiro", "no banheiro");

        livingRoom.setExit('norte', kitchen);
        livingRoom.setExit('leste', study);
        kitchen.setExit('sul', livingRoom);
        kitchen.setExit('leste', bedroom);
        study.setExit('oeste', livingRoom);
        study.setExit('norte', bedroom);
        bedroom.setExit('sul', study);
        bedroom.setExit('oeste', kitchen);
        bedroom.setExit('leste', bathroom);
        bathroom.setExit('oeste', bedroom);

        let key = new Item('chave', 'Uma chave que abre algo importante.');
        let recipeNote = new Item('nota de receita', 'Uma nota com uma receita.');
        let note = new Item('nota', 'Uma nota com uma pista crucial.');
        let pen = new Item('caneta', 'Uma caneta velha.');
        let box = new Item('caixa', 'Uma caixa que pode conter algo valioso.');
        let watch = new Item('relógio', 'Um relógio antigo.');
        let paperPiece = new Item('pedaço de papel', 'Um pedaço de papel com um código.');
        let moneyBag = new Item('mala de dinheiro', 'A mala de dinheiro que você está procurando.');

        kitchen.addItem(key);
        kitchen.addItem(recipeNote);
        study.addItem(note);
        study.addItem(pen);
        bedroom.addItem(box);
        bedroom.addItem(watch);
        bathroom.addItem(paperPiece);
        bathroom.addItem(moneyBag);

        kitchen.setClue('A chave abre algo importante.');
        study.setClue('A nota tem uma pista crucial.');
        bedroom.setClue('A caixa pode conter algo valioso.');
        bathroom.setClue('O pedaço de papel tem um código.');

        this.livingRoom = livingRoom;
        this.kitchen = kitchen;
        this.study = study;
        this.bedroom = bedroom;
        this.bathroom = bathroom;
    }
}

module.exports = Game;