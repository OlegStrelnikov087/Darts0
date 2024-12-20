import { actions } from "./actions"
const actionsClass = new actions()
const THROW_QUANTITY = 3
export const gameClass = class Game {
    game(data) {

            data.players.forEach(player => {
                if (this.gameOver(player,data.rounds)){
                    actionsClass.winGameMessage(player)
                    actionsClass.gameOverMessage()
                    return false
                } else {
                    
                    // do {
                        actionsClass.throwMessage(player)
                        let moveNumber=1
                        do {
                            let throwResultArr = actionsClass.throwPoints(player,moveNumber) 
                            player.scores = actionsClass.calculateScores(player,throwResultArr[0],throwResultArr[1])
                            actionsClass.residueMessage(player) 
                            moveNumber++
                            if (player.scores===0){
                                player.wins++
                                player.scores = data.scores
                                actionsClass.winRoundMessage(player)
                            }
                            } while (!this.nextPlayer(player,moveNumber)) 
                         
                    // } while (!this.gameOver(player,data.rounds))
                    // if (this.gameOver(player,data.rounds)){
                        // actionsClass.winRoundMessage(player)
                    // }
                
                }
            });
        
    }

    gameOver(player, rounds) {
        if (player.wins === rounds) {
            return true
        }  else return false
    }

    nextPlayer(player, move) {
        if (player.scores === 0) {
            return true
        } 
        if (move>THROW_QUANTITY) {
            return true
        } else return false
    }


}

// export const gamePlay =  function game(players, rounds, scores) {
//     let gameOver = false
//     while (gameOver != true) {
//         players.forEach(player => {
//             if (gameOver != true) {
//                 actionsClass.throwMessage(player)
//                 for (let moveNumber = 1; moveNumber < 4; moveNumber++) {
//                     if (player.scores != 0) {
//                         let moveResultArr = actionsClass.throwPoints(player,moveNumber)
//                         player.scores = actionsClass.calculateScores(player,moveResultArr[0],moveResultArr[1])
//                         if (player.scores === 0 && moveResultArr[1] === 'double') {           
//                             actionsClass.winRoundMessage(player)
//                             player.wins +=1
//                             players.forEach(player=> {
//                                 player.scores = scores
//                             })
//                             if (player.wins != rounds) {
//                                 break
//                             } else {
//                                 actionsClass.winGameMessage(player)
//                                 actionsClass.gameOverMessage()
//                                 gameOver = true
//                                 break
//                             }
//                         } else {
//                             actionsClass.residueMessage(player)
//                         }
//                     }
                    
//                 }
//             }  
//         })
//     }
// }


