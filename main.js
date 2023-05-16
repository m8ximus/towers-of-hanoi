const board = 
[[5, 4, 3, 2, 1],
[],
[]];

var newBoard = JSON.parse(JSON.stringify(board))


const checkWinner = function(currBoard) {
    if (currBoard[2].join("") === board[0].join("") || currBoard[1].join("") === board[0].join("")) {
        console.log("Congrats! You WON!!! Game resetting..")
        newBoard = JSON.parse(JSON.stringify(board))
    }
}
const moveDisc = function (start, move) {
    let moveLength = newBoard[move - 1].length - 1
    let startLength = newBoard[start - 1].length - 1
    const findStart = newBoard[start - 1][startLength]
    const findMove = newBoard[move - 1][moveLength]
    
    
    if (findStart > 0) {
        if (findStart > findMove) {
            console.log("You cannot move a larger disc on top of a smaller disc, The board has not changed")
        } else {
            console.log("Success! This is your new board!")
            if (moveLength < 0) {
                moveLength = 0
            }
            if (startLength < 0) {
                startLength = 0
            }
            newBoard[move - 1].push(findStart)
            newBoard[start - 1].pop()
            checkWinner(newBoard)
        }
    } else {
        console.log("There's no disc there!")
    }
    for (let i = 0; i < newBoard.length; i++) {
        console.log("---" + newBoard[i].join(" "))
    }
    
}

