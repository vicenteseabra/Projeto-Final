class Player {
    constructor(nome) {
        this.nome = nome;
        this.moveCount = 0;
        this.inventory = [];
    }

    processCommand(command, game) {
        let words = command.split(' ');
        let action = words[0];
        let target = words[1];

        switch(action) {
            case 'ir':
                this.goRoom(target, game);
                break;
            case 'olhar':
                this.lookAround(game);
                break;
            case 'pegar':
                this.takeItem(target, game);
                break;
            case 'largar':
                this.dropItem(target, game);
                break;
            case 'inventario':
                this.showInventory();
                break;
            case 'comandos':
                this.showCommands();
                break;
            default:
                console.log('Comando desconhecido.');
        }
    }

    goRoom(direction, game) {
        let nextRoom = game.currentRoom.getExit(direction);
        if (nextRoom) {
            game.currentRoom = nextRoom;
            this.moveCount++;
            console.log(game.currentRoom.getLongDescription());
            console.log(game.currentRoom.getItems());
            console.log(game.currentRoom.getClue());
        } else {
            console.log("Não há saída nessa direção!");
        }
    }

    lookAround(game) {
        console.log(game.currentRoom.getLongDescription());
        console.log(game.currentRoom.getItems());
        console.log(game.currentRoom.getClue());
    }

    takeItem(itemName, game) {
        let item = game.currentRoom.items.find(i => i.getName() === itemName);
        if (item) {
            game.currentRoom.removeItem(itemName);
            this.inventory.push(item);
            console.log(`Você pegou o(a) ${itemName}.`);

            if (itemName === 'mala') {
                console.log("Você encontrou a mala de dinheiro. Você venceu!");
                process.exit();
            }
        } else {
            console.log(`Não há ${itemName} aqui.`);
        }
    }

    dropItem(itemName, game) {
        let item = this.inventory.find(i => i.getName() === itemName);
        if (item) {
            this.inventory = this.inventory.filter(i => i.getName() !== itemName);
            game.currentRoom.addItem(item);
            console.log(`Você largou o(a) ${itemName}.`);
        } else {
            console.log(`Você não tem ${itemName} no inventário.`);
        }
    }

    showInventory() {
        if (this.inventory.length > 0) {
            console.log(`Seu inventário: ${this.inventory.map(item => item.getName()).join(', ')}`);
        } else {
            console.log("Seu inventário está vazio.");
        }
    }
    showCommands() {
        console.log("Comandos disponíveis:");
        console.log(" - ir [direção]: Move-se para a direção especificada (ex.: 'ir norte').");
        console.log(" - olhar: Descreve o ambiente atual e mostra itens e pistas disponíveis.");
        console.log(" - pegar [item]: Pega o item especificado (ex.: 'pegar chave').");
        console.log(" - largar [item]: Larga o item especificado (ex.: 'largar chave').");
        console.log(" - inventario: Mostra os itens no seu inventário.");
        console.log(" - comandos: Mostra esta lista de comandos.");
    }
}

module.exports = Player;
