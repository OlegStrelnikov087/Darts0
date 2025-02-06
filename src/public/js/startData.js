
class StartData {

    #getPlayersName() {
        const playersName = []
       
        let name
        do {
            name = prompt('Введите имя игрока. Если вы ввели имена всех игроков, то, чтобы продолжить нажмите ОК')
            if (name !== '' && name !== null) {
                playersName.push(name)
            } 
            
            if ((name === '' || name === null) && playersName.length < 2) {
                alert('сначала введите как минимум двух игроков!')
            }

            if (name === null && playersName.length > 1) {
                alert('нужно ввести имя игрока или нажать ОК когда добавите как минимум двух игроков')
            }
        } while (!this.#addPlayers(name, playersName.length))

        return playersName
    }

    #addPlayers(name, playersQuantity) {
        if (name === '' && playersQuantity >= 2){
            return true
        } else {
            return false
        }
    }

    #getRounds() {

        let rounds = ''
        do {
            rounds = parseInt(prompt('Введите количество легов'))

        } while (rounds < 1 || isNaN(rounds))
        return rounds
    }

    #getScores() {

        let scores = ''
        do {
            scores = parseInt(prompt('Введите количество очков'))
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


