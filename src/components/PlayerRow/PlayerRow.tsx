import { Player } from "../../models/Player";



export function PlayerRow( props: {player: Player,}) {

    return (
        <div>
        
                        <tr>
                            <td>{props.player.name}</td>
                            <td>{props.player.score}</td>
                        </tr>
                   
        </div>
    )
}