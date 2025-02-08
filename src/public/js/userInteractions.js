class UserInteractions {
    startThrowMessage(player) {
        console.log(`Бросает ${player.name}. Осталось ${player.scores} `)
    }

    throwErrorMessage() {
        console.log('error! Нужно ввести только число от 0 до 20, для утроения используйте t или T в начале строки, для удвоения w или W');
    }

    resultThrowMessage(moveNumber, playerName) {
        return prompt(`Результат ${moveNumber}-го броска игрока ${playerName}`)
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

    enterTheNumberOfRoundsMessage() {
        return prompt('Введите количество легов')
    }

    enterTheNumberOfScoresMessage() {
        return prompt('Введите количество очков')
    }

    enterPlayerName() {
        return prompt('Введите имя игрока. Если вы ввели имена всех игроков, то, чтобы продолжить нажмите ОК')
    }

    minimalNumberOfPlayersMessage() {
        alert('сначала введите как минимум двух игроков!') 
    }

    playerNameErrorMessage() {
        alert('нужно ввести имя игрока или нажать ОК когда добавите как минимум двух игроков')
    }

}

export const actions = new UserInteractions()