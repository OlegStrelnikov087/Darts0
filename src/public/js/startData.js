
class StartData {

    #getPlayersName() {

        const playersName = []
        // let name
        // do {
        //     name = prompt('Введите имя игрока. Если вы ввели имена всех игроков, то, чтобы продолжить нажмите ОК')
        //     if (name != '') {
        //         playersName.push(name)
        //     }
        // } while (name !== "")
        // return playersName
        let name 
        do {
            name = prompt('Введите имя игрока. Если вы ввели имена всех игроков, то, чтобы продолжить нажмите ОК')
            if ( (typeof name) == 'string' && name!== '') {
                playersName.push(name)
            } else {
                alert('сначала введите как минимум двух игроков!')
            }
        } while (playersName.length < 2)
        return playersName

    }

    #getRounds() {

        let rounds = ''
        do {
            rounds = prompt('Введите количество легов')

        } while (rounds < 1 || isNaN(rounds))
        return rounds
    }

    #getScores() {

        let scores = ''
        do {
            scores = prompt('Введите количество очков')
        } while (scores < 2 || isNaN(scores))
        return scores
    }


    #createPlayer(name, score) {
        return {
            name: name,
            scores: score,
            wins: 0
        }
    }

    #getPlayers(playersName, score) {
        let players = []
        playersName.forEach(name => {
            players.push(this.#createPlayer(name, score))
        })
        return players
    }

    getData() {

        let names = this.#getPlayersName()
        let rounds = this.#getRounds()
        let scores = this.#getScores()

        return {
            players: this.#getPlayers(names, scores),
            rounds: rounds,
            scores: scores
        }

    }

}

export const startData = new StartData()


