const THROW_LIMIT = 20
class Actions {
    throwMessage(player) {
        console.log(`Бросает ${player.name}. Осталось ${player.scores} `)
    }

    throwPoints(player, moveNumber) {
        let throwScores 
        do {

            let scores = prompt(`Результат ${moveNumber}-го броска игрока ${player.name}`)
            throwScores = parseInt(scores)
            if (throwScores <= THROW_LIMIT && throwScores >=0) {
                return [scores, 'normal']
    
            } else {
                const [symbol, ...numberArr] = scores
                const number = parseInt(numberArr.join(''))
                if (number <= THROW_LIMIT) {
                    switch (symbol) {
                        case 'T':
                        case 't':
                            return [number * 3, 'triple']
                        
                        case 'W':
                        case 'w':
                            return [number * 2, 'double']
                        default:
                            console.log('error! Нужно ввести только число от 0 до 20, для утроения используйте t или T в начале строки, для удвоения w или W');
                            throwScores = NaN
                    }
                } else {
                    console.log('error! Нужно ввести только число от 0 до 20, для утроения используйте t или T в начале строки, для удвоения w или W');
                    throwScores =  NaN 
                }
            }

        } while (isNaN(throwScores))

    }

    calculateScores(player, moveResult, doubling) {
        let result = player.scores - moveResult

        if (result > 1 || (result === 0 && doubling === 'double')) {
            return [result, false]
        } else {
            return [player.scores, true]
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

export const actions = new Actions()