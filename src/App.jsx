import { useState } from "react"

import Player from "./Components/Player"
import GameBoard from "./Components/GameBoard"
import Logs from "./Components/Logs";
import { WINNING_COMBINATIONS } from "./winning-combination";
import GameOver from "./Components/GameOver";

const initialGameBoard = [[null, null, null], [null, null, null], [null, null, null]]

function derievActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "0";
  }

  return currentPlayer;

}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false); -> this is a redundant state we can derieved the gamewinner from Gameturn 
  // const [activePlayer, setActivePlayer] = useState("X"); ..we dont need this now as on gameTurns it is changing the player 
  //now instead of making another state we are using Derieved State...
  const activePlayer = derievActivePlayer(gameTurns);
  //with this we still get the active player without managing the state


  // for extracting symbols
  let gameBoard = initialGameBoard
  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, cols } = square
    //object destructring twice

    gameBoard[row][cols] = player

    //drieved state
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol;
    }

  }

  const hasDraw = gameTurns.length === 9 && !winner;


  function handleSelectSqaure(rowIndex, colsIndex) {
    //now in here we check whether one of the winning combination is active or not ...if TRUE we have our winner

    // setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X");


    setGameTurns(prevTurns => {
      // let currentPlayer = "X";

      // if (prevTurns.length > 0 && prevTurns[0].player === "X") {
      //   currentPlayer = "0";
      // }
      const currentPlayer = derievActivePlayer(prevTurns);
      const updatedTurns = [{ square: { row: rowIndex, cols: colsIndex }, player: currentPlayer }, ...prevTurns];
      return updatedTurns;
    });
  }

  function handleRestart(){
    setGameTurns([])
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard onSelectSquare={handleSelectSqaure} board={gameBoard} />
      </div>

      <Logs turns={gameTurns} />
    </main>

  )
}

export default App
