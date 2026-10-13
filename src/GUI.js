function buildBoard(boardArr, gridName) {
    const gameboards = document.querySelector(".gameBoards")
    const grid = document.createElement("div")
    grid.classList.add(gridName)
    gameboards.appendChild(grid)
    const spreaded = []
    for(let i = 0; i < boardArr.length; i++) {
        spreaded.push(...boardArr[i]);
    }
    for(let j = 0; j < spreaded.length; j++) {
        const gridCell = document.createElement("button")
        gridCell.classList.add("gridCell")
        grid.appendChild(gridCell)
    }
};

export { buildBoard }