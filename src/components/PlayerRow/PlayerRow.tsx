import { Player } from "../../models/Player";



export function PlayerRow( props: {players: Player,}) {

    return (
        <div>
        
                        <tr>
                            <td>{props.players.name}</td>
                            <td>{props.players.score}</td>
                        </tr>
                   
        </div>
    )
}