import game from "./public/js/game";
import StartGame from "./public/js/start";
let start = new StartGame()
// const playersName = ['Олег', 'Батя']
// const rounds = 2
// const scores = 501

// const players = [
//     {
//         name: 'Олег',
//         wins: 0,
//         scores: scores
//     },
//     {
//         name: 'Батя',
//         wins: 0,
//         scores: scores
//     }
// ]



document.querySelector('.play').addEventListener('click', () => {
    const playersName = start.getPlayersName()
    const rounds = start.getRounds()
    const scores = start.getScores()
    const players = start.getPlayers(playersName, scores)
    game(players, rounds, scores)

})