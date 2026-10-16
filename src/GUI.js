function buildBoard(player, enemy, playRound) {
    const gameboards = document.querySelector(".gameBoards")
    const friendlyGrid = document.createElement("div")
    friendlyGrid.classList.add("humanBoard")
    gameboards.appendChild(friendlyGrid)
    for(let i = 0; i < player.board.boardArr.length; i++) {
        for(let j = 0; j < player.board.boardArr[i].length; j++) {
            const gridCell = document.createElement("button")
            gridCell.classList.add("gridCell");
            friendlyGrid.appendChild(gridCell);
            if(player.board.boardArr[i][j]) {
                gridCell.classList.add("containsShip")
            }
            if(player.board.shotsArr[i][j]) {
                gridCell.classList.add("gotShot")
            }
        }
    }
    
    const enemyGrid = document.createElement("div")
    enemyGrid.classList.add("humanFogBoard");
    gameboards.appendChild(enemyGrid);
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
};

function destroyContent(parentDiv) {
    while(parentDiv.hasChildNodes()) {
        parentDiv.removeChild(parentDiv.firstChild)
    }
};

export { buildBoard, destroyContent }