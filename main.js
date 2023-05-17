const board = {
pegs: [[5, 4, 3, 2, 1],[],[]],
plays: 0,
originalPegs: null,
checkWinner() {
    if (this.pegs[2].join("") === this.originalPegs[0].join("") || this.pegs[1].join("") === this.originalPegs[0].join("")) {
        console.log("Congrats! You WON!!! Game resetting..")
        this.pegs = this.originalPegs
        this.printBoard()
    }
},
printBoard() {
    this.pegs.forEach((x) =>{ 
        console.log("---" + x.join(" "))
    })
},
createOriginalPegs() {
    return this.pegs.map((x)=> {
        return x.map((x) => x)
    })
},
moveDisc(start, move) {
    this.originalPegs = this.createOriginalPegs()
    const findStart = this.pegs[start - 1][this.pegs[start - 1].length - 1]
    const findMove = this.pegs[move - 1][this.pegs[move - 1].length - 1]
    
    
    if (findStart > 0) {
        if (findStart > findMove) {
            console.log("You cannot move a larger disc on top of a smaller disc, The board has not changed")
        } else {
            console.log("Success! This is your new board!")
            this.pegs[move - 1].push(findStart)
            this.pegs[start - 1].pop()
            this.checkWinner()
        }
    } else {
        console.log("There's no disc there!")
    }
    this.printBoard()
}

}
board.moveDisc(1,2)