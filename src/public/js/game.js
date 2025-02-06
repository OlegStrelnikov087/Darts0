import { actions } from "./userInteractions"
const THROW_QUANTITY = 3
const THROW_LIMIT = 20
class Game {
    constructor(data) {
        this.data = data
    }

    game() {
        let gameNotIsOver = true
        while (gameNotIsOver) {
            for (let i = 0; i < this.data.players.length; i++) {
                let move = 1
                let calculateScoreArr
                do {
                    actions.startThrowMessage(this.data.players[i])
                    let throwScoreArr = this.#throwPoints(this.data.players[i], move)
                    calculateScoreArr = this.#calculateScores(this.data.players[i], throwScoreArr[0], throwScoreArr[1])
                    this.data.players[i].scores = calculateScoreArr[0]
                    move++
                    actions.residueMessage(this.data.players[i])
                } while (!this.#nextPlayer(this.#playerWinRound(this.data.players[i]), move, calculateScoreArr[1]))

                if (this.#playerWinRound(this.data.players[i])) {
                    actions.winRoundMessage(this.data.players[i])
                    this.data.players[i].wins++
                    this.data.players.forEach((player) => this.#resetPlayerScores(player, this.data.scores))
                }

                if (this.#playerWinGame(this.data.players[i], this.data.rounds)) {
                    actions.winGameMessage(this.data.players[i])
                    actions.gameOverMessage()
                    gameNotIsOver = false
                    break
                }
            }
        }

    }

    #throwPoints(player, moveNumber) {
        let throwScores
        do {
            let scores = actions.resultThrowMessage(moveNumber, player.name)
            throwScores = parseInt(scores)
            if (throwScores <= THROW_LIMIT && throwScores >= 0) {
                return [scores, 'normal']
            } else {
                const [symbol, ...numberArr] = scores
                const number = parseInt(numberArr.join(''))
                if (number <= THROW_LIMIT) {
                    switch (symbol) {
                        case 'T':
                        case 't':
                            return [number * 3, 'triple']

                        case 'W':
                        case 'w':
                            return [number * 2, 'double']
                        default:
                            actions.throwErrorMessage()
                            throwScores = NaN
                    }
                } else {
                    actions.throwErrorMessage()
                    throwScores = NaN
                }
            }
        } while (isNaN(throwScores))
    }


    #calculateScores(player, moveResult, doubling) {
        let result = player.scores - moveResult

        if (result > 1 || (result === 0 && doubling === 'double')) {
            return [result, false]
        } else {
            return [player.scores, true]
        }
    }

    #nextPlayer(playerWinRound, move, isOverTheScore) {
        if (playerWinRound || move > THROW_QUANTITY || isOverTheScore) {
            return true
        } else return false
    }

    #playerWinRound(player) {
        if (player.scores === 0) {
            return true
        } else return false
    }

    #playerWinGame(player, rounds) {
        if (player.wins == rounds) {
            return true
        } else return false
    }

    #resetPlayerScores(player, scores) {
        player.scores = scores
        return player
    }
}

export const gameClass = Game