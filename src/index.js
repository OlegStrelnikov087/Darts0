import { gameClass } from "./public/js/game";
import { startData } from "./public/js/startData";



document.addEventListener('DOMContentLoaded', () => {
    const data = startData.getData()
    // function listener() {
    //         console.log('Ураааа !');
    //         (new gameClass(data)).game()
    //     }
    const btn = document.querySelector('.play')
    function listener(event){
        (new gameClass(data)).game()
        btn.removeEventListener('click',listener)
    }   

    btn.addEventListener('click', listener)
    // btn.addEventListener('click', listener)
    // btn.addEventListener('click', ()=>{
    //     btn.removeEventListener('click', listener)
    // })

})

