import { useState } from "react"
import { Player } from "../../models/Player"


export function PlayerForm( props: {onAdd: (newPlayer: Player) => void}) {

    const [name, setName] = useState('');
    const [score, setScore] = useState('');

    return (
        <div>
        <form onSubmit={e => {e.preventDefault();
    const newPlayer = {
        name: name,
        score: +score
    } 
    
    props.onAdd(newPlayer);
    }}>
    <label>Name</label>
    <input value={name} onChange={e => setName(e.target.value)} type="text" />
    <label>Score</label>
    <input value={score} onChange={e => setScore(e.target.value)} type="number" />
    <button>Add</button>
        </form>
        </div>
    )
}