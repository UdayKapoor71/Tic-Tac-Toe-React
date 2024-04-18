export default function GameBoard({ onSelectSquare, board }) {

    
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSqaure(rowIndex, colsIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colsIndex] = cols;
    //         // prevGameBoard[rowIndex][colsIndex] = "X"; // this approach is not recommended
    //         //as you would be updating the old value in-memory immediately , even before this schedule state update was execute by react this can lead to strange bugs or side effects if you have multiple places in your application that are scheduling state update for the same state
    //         // return prevGameBoard;
    //         return updatedBoard;
    //         //by using this method we are updating state in an immutable state
    //     });

    // onSelectSquare();

    return (
        <ol id="game-board">
            {board.map((row, rwoIndex) => (
                <li key={rwoIndex}>
                    <ol>
                        {row.map((cols, colsIndex) => (
                            <li key={colsIndex}>
                                <button onClick={() => onSelectSquare(rwoIndex, colsIndex)}>{cols}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}