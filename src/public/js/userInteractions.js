class UserInteractions {
    #output(message) {
        console.log(message)
    }
    #input(message) {
        return prompt(message)
    }
    startThrowMessage(player) {
        this.#output(`Бросает ${player.name}. Осталось ${player.scores}`)
    }

    throwErrorMessage() {
        this.#output('Ошибка! Нужно ввести только число от 0 до 20, для утроения используйте t или T в начале строки, для удвоения w или W')
    }

    resultThrowMessage(moveNumber, playerName) {
        return this.#input(`Результат ${moveNumber}-го броска игрока ${playerName}`)
    }

    residueMessage(player) {
        this.#output(`У игрока ${player.name} осталось ${player.scores}`)
    }

    winRoundMessage(player) {
        this.#output(`${player.name} выйграл лег`)
    }


    winGameMessage(player) {
        this.#output(`Игрок ${player.name} выйграл! Поздравляем!`)
    }

    gameOverMessage() {
        this.#output('Игра окончена')
    }

    enterTheNumberOfRoundsMessage() {
        return this.#input('Введите количество легов')
    }

    enterTheNumberOfScoresMessage() {
        return this.#input('Введите количество очков')
    }

    enterPlayerName() {
        return this.#input('Введите имя игрока. Если вы ввели имена всех игроков, то, чтобы продолжить нажмите ОК')
    }

    minimalNumberOfPlayersMessage() {
        this.#output('сначала введите как минимум двух игроков!')
    }

    playerNameErrorMessage() {
        this.#output('нужно ввести имя игрока или нажать ОК когда добавите как минимум двух игроков')
    }

}

export const actions = new UserInteractions()