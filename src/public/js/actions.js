export const actions = class Actions {
    throwMessage(player) {
        console.log(`Бросает ${player.name}. Осталось ${player.scores} `)
    }

    throwPoints(player, moveNumber) {

        let scoresQuantity
        do {
            let scores = ''
            scores = prompt(`Результат ${moveNumber}-го броска игрока ${player.name}`)
            scoresQuantity = parseInt(scores)
            if (scoresQuantity <= 20) {
                return [scoresQuantity, 'normal']
            } else {
                const [symbol, ...numberArr] = scores;
                const number = parseInt(numberArr.join(''))
                if (number <= 20) {
                    switch (symbol) {
                        case 'T':
                        case 't':
                            return [number * 3, 'triple']
                        case 'W':
                        case 'w':
                            return [number * 2, 'double']
                        default:
                            scoresQuantity = NaN
                    }
                } else {
                    scoresQuantity = NaN
                    alert('error! Нужно ввести только число от 0 до 20, для утроения используйте t или T в начале строки, для удвоения w или W');
                    continue
                }
            }

        } while (isNaN(scoresQuantity))

        return scoresQuantity
    }

    calculateScores(player, moveResult, doubling) {
        let result = player.scores - moveResult

        if (result > 1 || (result === 0 && doubling === 'double')) {
            return result
        } else {
            // alert('error Перебор')
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