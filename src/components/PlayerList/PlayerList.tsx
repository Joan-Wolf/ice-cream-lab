import { useState } from "react"
import { PlayerRow } from "../PlayerRow/PlayerRow"
import { Player } from "../../models/Player"
import { PlayerForm } from "../PlayerForm/PlayerForm"


export function PlayerList( props: {onAdd: (newPlayer: Player) => void}) {
    const [players, setPlayers] = useState<Player[]>([{name: "Fox", score: 12}, {name: "Turtle", score: 11}])



    return (
        <div>
            <h1 style={{margin: 10 + "px", color: "darkorchid"}}>Player List</h1>
            <button>Clear List</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                {players.map((players, i) => {
                    return (
                        <tr key={i}>
                            <td>{players.name}</td>
                            <td>{players.score}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <PlayerForm onAdd={(newPlayer: Player) => {props.onAdd(newPlayer)}}></PlayerForm>
        </div>
    )
}