import { gameClass } from "./public/js/game";
import { startData } from "./public/js/startData";



document.addEventListener('DOMContentLoaded', () => {
    const data = startData.getData()
    const btn = document.querySelector('.play')
    const listener = (event) => {
        (new gameClass(data)).game()
        btn.removeEventListener('click', listener)
    }

    btn.addEventListener('click', listener)
  
})

