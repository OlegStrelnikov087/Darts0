import { actions } from "./actions"
const actionsClass = new actions()
const THROW_QUANTITY = 3
export const gameClass = class Game {
    constructor(data) {
        this.data = data
    }
    game() {

        let gameIsOver = false
        while (gameIsOver === false) {
            for (let i = 0; i < this.data.players.length; i++) {

                let move = 1
                do {
                    let throwScoreArr = actionsClass.throwPoints(this.data.players[i], move)
                    this.data.players[i].scores = actionsClass.calculateScores(this.data.players[i], throwScoreArr[0], throwScoreArr[1])
                    actionsClass.residueMessage(this.data.players[i])
                    move++
                } while (!this.nextPlayer(this.playerWinRound(this.data.players[i]), move));
                if (this.playerWinRound(this.data.players[i])) {
                    actionsClass.winRoundMessage(this.data.players[i])
                    this.data.players = this.data.players.map((player) => this.resetPlayerScores(player, this.data.scores)) // сброс очков у всех игроков после окончания лега
                    console.log(this.data);
                    this.data.players[i].wins++
                }
                if (this.playerWinGame(this.data.players[i], this.data.rounds)) {
                    actionsClass.winGameMessage(this.data.players[i])
                    gameIsOver = this.gameOver(this.playerWinGame(this.data.players[i], this.data.rounds))
                    break
                }
            }

        }
        actionsClass.gameOverMessage()

    }

    gameOver(playerWin) {
        if (playerWin) {
            return true
        } else return false
        // можно добавить еще варианты завершения игры
    }

    nextPlayer(playerWinRound, move) {

        if (playerWinRound || move > THROW_QUANTITY) {
            return true
        } else return false
    }

    playerWinRound(player) {
        if (player.scores === 0) {
            return true
        } else return false
    }

    playerWinGame(player, rounds) {
        if (player.wins === rounds) {
            return true
        } else return false
    }

    resetPlayerScores(player, scores) {
        player.scores = scores
        return player
    }


}

