import { useState } from "react"
export default function Player({ name, symbol, isActive }) {
    const [setName, isSetName] = useState(name);
    const [isEditing, setIsEditing] = useState(false) //array destructuring
    // boolean value se state maintain kre ge hum

    function handleEditClick() {
        // setIsEditing(isEditing ? false : true) ....this is the one way to make sure the value is switch the value 
        //but the above solution has couple of flaws 1.unnecessarily complex

        // setIsEditing(!isEditing); ... this is still not perfect
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        isSetName(event.target.value);
    }

    let playerName = <span className="player-name">{setName}</span>
    // let btnCaption = 'EDIT';

    if (isEditing) {
        // value :- pre populate the current name of the player
        playerName = (<input type="text" required value={setName} onChange={handleChange} />);
        // btnCaption = 'SAVE'
    }

    return (
        <>
            <li className={isActive ? "active" : undefined}>
                <span className="player">
                    {playerName}
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button onClick={handleEditClick}>{isEditing ? "SAVE" : "EDIT"}</button>
            </li>
        </>
    )
}