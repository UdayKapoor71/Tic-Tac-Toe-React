export default function Logs({ turns }) {
    return (
        <>
            <ol id="log">
                {turns.map(turn => <li key={`${turn.square.row}${turn.square.cols}`}>{turn.player}selected{turn.square.row},{turn.square.cols}</li>)}
            </ol>
        </>
    )
}