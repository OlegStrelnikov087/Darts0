import { actions } from "./userInteractions"
class StartData {

    #getPlayersName() {
        const playersName = []
        let name
        do {
            name = actions.enterPlayerName()
            if (name !== '' && name !== null) {
                playersName.push(name)
            }

            if ((name === '' || name === null) && playersName.length < 2) {
                actions.minimalNumberOfPlayersMessage()
            }

            if (name === null && playersName.length > 1) {
                actions.playerNameErrorMessage()
            }
        } while (!this.#addPlayers(name, playersName.length))

        return playersName
    }

    #addPlayers(name, playersQuantity) {
        if (name === '' && playersQuantity >= 2) {
            return true
        } else {
            return false
        }
    }

    #getRounds() {

        let rounds = ''
        do {
            rounds = parseInt(Number(actions.enterTheNumberOfRoundsMessage()))
        } while (rounds < 1 || isNaN(rounds))
        return rounds
    }

    #getScores() {

        let scores = ''
        do {
            scores = parseInt(Number(actions.enterTheNumberOfScoresMessage()))
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


