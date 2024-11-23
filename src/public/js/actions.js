export default class Actions {
    moveMessage(player) {
        console.log(`Бросает ${player.name}. Осталось ${player.scores} `)
    }

    getMoveResult(player, moveNumber) {

        let scores = ''
        let scoresQuantity
        do {

            scores = prompt(`Результат ${moveNumber}-го броска игрока ${player.name}`)
            scoresQuantity = Number(scores)
            const [symbol, ...numberArr] = scores;
            const number = numberArr.join('')
            switch (symbol) {
                case 't':
                case 'T':
                    if (Number(number)) {
                        // return parseInt(number) * 3;
                        return [parseInt(number)*3, 'triple']
                    } else {
                        alert('error')
                        continue;
                    }
                case 'w':
                case 'W':
                    if (Number(number)) {
                        // return parseInt(number) * 2;
                        return [parseInt(number)*2, 'double']
                    } else {
                        alert('error')
                        continue;
                    }
                default:
                    if (Number(scoresQuantity)) {
                        // return parseInt(scoresQuantity);
                        return [parseInt(scoresQuantity), 'normal']
                    } else {
                        alert('error!');
                    }

            }
        } while (isNaN(scoresQuantity))

        return scoresQuantity
    }

    calculateScores(player, moveResult, doubling) {
        let result =  player.scores - moveResult
    
        if (result >1 || (result === 0 && doubling === 'double')) {
            return result
        } else {
            alert('error Перебор')
            return player.scores
        }

        
    }

    residueMessage(player) {
        console.log(`У игрока ${player.name} осталось ${player.scores}`)
    }

    winRoundMessage(player) {
        console.log(`${player.name} выйграл лег`)
    }


    winGameMessage(player) {
        console.log(`Игрок ${player.name} выйграл! Поздравляем!`)
    }

    gameOverMessage() {
        console.log('Игра окончена');
    }

}