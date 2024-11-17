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
        return prompt('Введите количество легов')
    }


    getScores() {
        return prompt('Введите количество очков')
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




