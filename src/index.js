import game from "./public/js/darts";
const playersName = ['Олег', 'Батя']
const rounds = 2
const scores = 501

const players = [
    {
        name: 'Олег',
        wins: 0,
        scores: scores
    },
    {
        name: 'Батя',
        wins: 0,
        scores: scores
    }
]

document.querySelector('.play').addEventListener('click', ()=>{
    game(players,rounds,scores)

})