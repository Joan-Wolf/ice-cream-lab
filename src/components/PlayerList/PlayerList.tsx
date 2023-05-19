import { useState } from "react"
import { PlayerRow } from "../PlayerRow/PlayerRow"
import { Player } from "../../models/Player"
import { PlayerForm } from "../PlayerForm/PlayerForm"


export function PlayerList( props: {players: Player[], onAdd: (newPlayer: Player) => void}) {


    return (
        <div>
            <h1 style={{margin: 10 + "px", color: "darkorchid"}}>Player List</h1>
            
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                {props.players.map(allPlayers => <PlayerRow player={allPlayers}></PlayerRow>)}
                </tbody>
            </table>
            <PlayerForm onAdd={(newPlayer: Player) => {props.onAdd(newPlayer)}}></PlayerForm>
        </div>
    )
}