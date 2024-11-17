export default class Actions {
    moveMessage(player) {
        console.log(`Бросает ${player.name}. Осталось ${player.scores} `)
    }

    moveResult(player, moveNumber) {
        let moveResult = prompt(`Результат ${moveNumber}-го броска игрока ${player.name}`)
        return moveResult
    }

    calculate(player,moveResult) {
        return player.scores - moveResult
    }

    residueMessage(player) {
        console.log(`У игрока ${player.name} осталось ${player.scores}`)
    }

    winRoundMessage(player) {
        console.log(`${player.name} выйграл лег`)
    }

   
    winGameMessage(player) {
        console.log(`Игрок ${player.name} выйграл! Поздравляем!`)
    }

    gameOverMessage() {
        console.log('Игра окончена');
    }

}