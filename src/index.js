import game from "./public/js/game";
import StartGame from "./public/js/start";
let start = new StartGame()


document.querySelector('.play').addEventListener('click', () => {
    const playersName = start.getPlayersName()
    const rounds = start.getRounds()
    const scores = start.getScores()
    const players = start.getPlayers(playersName, scores)
    game(players, rounds, scores)

})