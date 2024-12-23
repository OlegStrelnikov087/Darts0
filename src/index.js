import { gameClass } from "./public/js/game";
import { startData } from "./public/js/startData";
const start = new startData()
const game = new gameClass()







document.addEventListener('DOMContentLoaded', () => {
    const data = start.getData()
    document.querySelector('.play').addEventListener('click', () => {
        game.game(data)
    })
})
