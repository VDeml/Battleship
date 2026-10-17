function buildBoard(player, enemy, playRound, resetGame) {
    const globalWrapper = document.querySelector(".wrapper")
    const h1 = document.createElement("h1")
    h1.textContent = "BATTLESHIP"
    globalWrapper.appendChild(h1)
    const gameboards = document.createElement("div")
    gameboards.classList.add("gameBoards")
    globalWrapper.appendChild(gameboards)
    const friendlyWrapper = document.createElement("div")
    friendlyWrapper.classList.add("wrap")
    gameboards.appendChild(friendlyWrapper)
    const friendlyGrid = document.createElement("div")
    const friendlyGridHeadline = document.createElement("h2")
    friendlyGridHeadline.textContent = "Your ships"
    friendlyWrapper.appendChild(friendlyGridHeadline)
    friendlyGrid.classList.add("humanBoard")
    friendlyWrapper.appendChild(friendlyGrid)
    for(let i = 0; i < player.board.boardArr.length; i++) {
        for(let j = 0; j < player.board.boardArr[i].length; j++) {
            const gridCell = document.createElement("button")
            gridCell.classList.add("gridCell");
            friendlyGrid.appendChild(gridCell);
            if(player.board.boardArr[i][j]) {
                gridCell.classList.add(player.board.boardArr[i][j].className)
            }
            if(player.board.shotsArr[i][j]) {
                if(player.board.boardArr[i][j]) {
                    gridCell.classList.add("hit")
                }
                else gridCell.classList.add("missed")
            }
        }
    }
    
    const enemyWrapper = document.createElement("div")
    enemyWrapper.classList.add("wrap")
    gameboards.appendChild(enemyWrapper)
    const enemyGrid = document.createElement("div")
    const enemyGridHeadline = document.createElement("h2")
    enemyGridHeadline.textContent = "Enemy field"
    enemyWrapper.appendChild(enemyGridHeadline)
    enemyGrid.classList.add("humanFogBoard");
    enemyWrapper.appendChild(enemyGrid);
    for(let k = 0; k < enemy.board.boardArr.length; k++) {
        for(let l = 0; l < enemy.board.boardArr[k].length; l++) {
            const enemyCell = document.createElement("button");
            enemyCell.classList.add("gridCell");
            enemyGrid.appendChild(enemyCell)
            enemyCell.addEventListener("click", () => {
                playRound(enemy, [k,l]);
            });
            if(enemy.board.shotsArr[k][l]) {
                if(enemy.board.boardArr[k][l]) {
                    enemyCell.classList.add("hit")
                }
                else enemyCell.classList.add("missed")
            }
        }
    }
    const wrapper = document.querySelector(".wrapper")
    const resetBtn = document.createElement("button")
    resetBtn.classList.add("shuffle")
    resetBtn.textContent = "Randomize boards"
    wrapper.appendChild(resetBtn)
    resetBtn.addEventListener("click", () => 
        resetGame()
    )
    
};

function destroyContent(parentDiv) {
    while(parentDiv.hasChildNodes()) {
        parentDiv.removeChild(parentDiv.firstChild)
    }
};


export { buildBoard, destroyContent }