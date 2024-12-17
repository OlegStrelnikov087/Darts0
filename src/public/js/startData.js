
export const startData = class StartData {

    getPlayersName() {
        let playersName = []
        let createPlayers = true
        while (createPlayers) {
            let name = prompt('Введите имя игрока. Если вы ввели имена всех игроков, то, чтобы продолжить нажмите ОК или введите 0')
            if (name != 0) {
                playersName.push(name)
            } else {
                createPlayers = false
            }
        }
        return playersName


    }

    getRounds() {
        let rounds = ''
        let roundsQuantity = NaN
        do {
            rounds = prompt('Введите количество легов')
            roundsQuantity = Number(rounds)
        } while (isNaN(roundsQuantity))

        return roundsQuantity
    }





    getScores() {

        let scores = ''
        let scoresQuantity
        do {

            scores = prompt('Введите количество очков')
            scoresQuantity = Number(scores)

        } while (isNaN(scoresQuantity))

        return scoresQuantity

    }


    createPlayer(name, score) {
        return {
            name: name,
            scores: score,
            wins: 0
        }
    }

    getPlayers(playersName, score) {
        let players = []
        playersName.forEach(name => {
            players.push(this.createPlayer(name, score))
        })
        return players
    }

    getData() {

        let names = this.getPlayersName()
        let rounds = this.getRounds()
        let scores = this.getScores()

        return {
            players: this.getPlayers(names, scores),
            rounds: rounds,
            scores: scores
        }


    }

}




