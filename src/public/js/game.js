import Actions from "./actions"
let gameClass = new Actions()
export default function game(players, rounds, scores) {
    let gameOver = false
    while (gameOver != true) {

        players.forEach(player => {
            if (gameOver != true) {
                gameClass.moveMessage(player)
                for (let moveNumber = 1; moveNumber < 4; moveNumber++) {
                    if (player.scores != 0) {
                        let moveResult = gameClass.getMoveResult(player, moveNumber)
                        player.scores = gameClass.calculateScores(player, moveResult)
                        if (player.scores != 0) {
                            gameClass.residueMessage(player)
                        } else {
                            gameClass.winRoundMessage(player)
                            player.wins += 1
                            players.forEach(player => {
                                player.scores = scores
                            })
                            if (player.wins != rounds) {
                                break
                            } else {
                                gameClass.winGameMessage(player)
                                gameOver = true
                                gameClass.gameOverMessage()
                                break
                            }
                        }
                    }

                }
            }
        })

    }
}