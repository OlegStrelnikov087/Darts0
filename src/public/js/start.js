
export default class StartGame {

    getPlayersName() {
        let playersName = []
        let createPlayers = true
        while (createPlayers != false) {
            let name = prompt('Введите имя игрока')
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

}




