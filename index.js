const Game = require("./Class/game");

const prompt = require("prompt-sync")();

console.log("Bem vindo ao jogo: Caça ao Tesouro na Mansão Misteriosa");
console.log("\n Uma família deseja contratar o melhor investigador para encontrar uma mala de dinheiro");
console.log(" Esta mala contém a herança de um senhor que viveu seus últimos dias na sua mansão");
console.log(" Neste jogo de mistério você será encarregado de encontrar esta herança\n\n");


console.log("Você deseja embarcar nessa aventura e ajudar essa família?");
let resposta = prompt("Digite sim ou nao: ");
let game;
if(resposta.toLowerCase() == "sim"){
    console.log("\nVamos nessa!");
    const nome = prompt("Como você gostaria de ser chamado? ");
    game = new Game(nome);
    console.log("");
    introduction();
    console.log(`\n\nAgora ${game.player.nome}, vamos iniciar sua missão!`);
    console.log(game.currentRoom.getLongDescription());
    console.log(game.currentRoom.getItems());
    while(game.player.moveCount<4){
        let comand = prompt("Digite um comando: ");
        game.player.processCommand(comand, game);
        console.log("");
        if(game.currentRoom.name == 'Banheiro' ){
            console.log("Você ganhou");
            return;
        }
    }
    console.log("Você se moveu mais de 3 vezes. Você perdeu!");

}else{
    console.log("Obrigado, até a próxima!");
}
function introduction(){
    console.log("\n\n Antes de embarcarmos nessa jornada preciso explicar algumas coisas ao nosso grande investigador!");
    console.log(" Neste jogo você tem 3 chances(step) para chegar ao comodo em que está o tesouro");
    console.log(" Cada vez que você passa para outro cômodo conta como uma chance.");
    console.log(" Pegue todas os itens que contem dicas e guarde em seu inventario.\n");
    game.player.processCommand('comandos', game);
    console.log("");
} 