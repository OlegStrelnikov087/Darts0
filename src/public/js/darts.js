
export default function game(players, rounds, scores) {
    let gameOver = false
    while (gameOver != true) {


        players.forEach(player => {
            if (gameOver != true) {

            console.log(`Бросает ${player.name}`)
            for (let i = 1; i < 4; i++) {
                if (player.scores != 0) {
                    let moveResult = prompt(`Результат ${i}-го броска игрока ${player.name}`)
                    player.scores = player.scores - moveResult
                    if (player.scores != 0) {
                        console.log(`У игрока ${player.name} осталось ${player.scores}`)
                    } else {
                        console.log(`${player.name} выйграл лег`)
                        player.wins += 1
                        players.forEach(player => {
                            player.scores = scores
                        })
                        if (player.wins != rounds) {
                            break
                        } else {
                            console.log(`Игрок ${player.name} выйграл! Поздравляем!`)
                            gameOver = true
                            console.log('Игра окончена');
                            break
                        }
                    }
                }

            }
        } 
        })

    }
}