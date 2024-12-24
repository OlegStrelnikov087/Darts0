import { gameClass } from "./public/js/game";
import { startData } from "./public/js/startData";
const start = new startData()




document.addEventListener('DOMContentLoaded', () => {
    const data = start.getData()
    const game = new gameClass(data)

    function listener() {
        console.log('Ураааа !');
        game.game()
    }
    const btn = document.querySelector('.play')

    btn.addEventListener('click', listener)
    btn.addEventListener('click', ()=>{
        btn.removeEventListener('click', listener)
    })
    

})

