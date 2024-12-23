import { actions } from "./actions"
const actionsClass = new actions()
const THROW_QUANTITY = 3
export const gameClass = class Game {
    game(data) {
        let gameIsOver = false
        while (gameIsOver === false) {
            data.players.forEach(player => {
                let move = 1
                do {
                    let throwScoreArr = actionsClass.throwPoints(player, move)
                    player.scores = actionsClass.calculateScores(player, throwScoreArr[0], throwScoreArr[1])
                    actionsClass.residueMessage(player)
                    move++
                } while (!this.nextPlayer(this.playerWinRound(player), move));
                if (this.playerWinRound(player)) {
                    actionsClass.winRoundMessage(player)
                    player.wins++
                }
                gameIsOver = this.gameOver(player, data.rounds)
            });
        }
        actionsClass.gameOverMessage()
    }

    gameOver(player, rounds) {
        if (player.wins === rounds) {
            return true
        } else return false
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


}

