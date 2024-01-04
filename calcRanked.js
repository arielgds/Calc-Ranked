const player = {
    name: "Fulano",
    win: 53,
    loss: 5,
};

const rank = [10, 20, 50, 80, 90, 100];
const rankNames = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
let rankName = "";
let victory;

function rankedCalc(win, loss) {
    victory = win - loss;
}

rankedCalc(player.win, player.loss);

for (let i = 0; i < rank.length; i++) {
    if (victory >= rank[i]) {
        rankName = rankNames[i];
        halfNext = i + 1
    }
}

switch (rankName.toLowerCase()) {
    case "ferro":
    case "bronze":
    case "prata":
    case "ouro":
    case "diamante":
    case "lendário":
    case "imortal":
        console.log(`Olá ${player.name}!`);
        console.log(`Seu saldo de vitórias é de ${victory} e você está no nível de ${rankName}`);
        console.log (`Faltam ${rank[halfNext] - victory} vitórias para o nivel de ${rankNames[halfNext]}!`);

        break;
    default:
        console.log("Nível não reconhecido");
}