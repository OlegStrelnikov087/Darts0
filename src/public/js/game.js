import { actions } from "./actions"
const actionsClass = new actions()

export const gamePlay =  function game(players, rounds, scores) {
    let gameOver = false
    while (gameOver != true) {
        players.forEach(player => {
            if (gameOver != true) {
                actionsClass.throwMessage(player)
                for (let moveNumber = 1; moveNumber < 4; moveNumber++) {
                    if (player.scores != 0) {
                        let moveResultArr = actionsClass.throwPoints(player,moveNumber)
                        player.scores = actionsClass.calculateScores(player,moveResultArr[0],moveResultArr[1])
                        if (player.scores === 0 && moveResultArr[1] === 'double') {
                            actionsClass.winRoundMessage(player)
                            player.wins +=1
                            players.forEach(player=> {
                                player.scores = scores
                            })
                            if (player.wins != rounds) {
                                break
                            } else {
                                actionsClass.winGameMessage(player)
                                actionsClass.gameOverMessage()
                                gameOver = true
                                break
                            }
                        } else {
                            actionsClass.residueMessage(player)
                        }
                    }
                    
                }
            }  
        })
    }
}


// export default function game(players, rounds, scores) {
//     let gameOver = false
//     while (gameOver != true) {

//         players.forEach(player => {
//             if (gameOver != true) {
//                 actionsClass.moveMessage(player)
//                 for (let moveNumber = 1; moveNumber < 4; moveNumber++) {
//                     if (player.scores != 0) {
//                         let moveResult = actionsClass.getMoveResult(player, moveNumber)
//                         player.scores = actionsClass.calculateScores(player, moveResult)
//                         if (player.scores != 0) {
//                             actionsClass.residueMessage(player)
//                         } else {
//                             actionsClass.winRoundMessage(player)
//                             player.wins += 1
//                             players.forEach(player => {
//                                 player.scores = scores
//                             })
//                             if (player.wins != rounds) {
//                                 break
//                             } else {
//                                 actionsClass.winGameMessage(player)
//                                 gameOver = true
//                                 actionsClass.gameOverMessage()
//                                 break
//                             }
//                         }
//                     }

//                 }
//             }
//         })

//     }
// }