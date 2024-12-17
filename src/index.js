import { gamePlay } from "./public/js/game";
import { startData } from "./public/js/startData";
const start = new startData()




// document.querySelector('.play').addEventListener('click', () => {
//     const playersName = start.getPlayersName()
//     const rounds = start.getRounds()
//     const scores = start.getScores()
//     const players = start.getPlayers(playersName, scores)
//     game(players, rounds, scores)
// })

// document.querySelector('.play').addEventListener('click', () => {
//     game(data.players, data.rounds, data.scores)
// })
// document.querySelector('.play').removeEventListener('click', startPlay)



document.addEventListener('DOMContentLoaded', () => {

    const data = start.getData()
    document.querySelector('.play').addEventListener('click', () => {
        gamePlay(data.players, data.rounds, data.scores)
    })
})
