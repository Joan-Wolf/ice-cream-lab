import { useState } from "react";
import "./VoteHere.css"

export function VotesComponent() {
    const [chocolate, setChocolate] = useState(0);
    const [vanilla, setVanilla] = useState(0);
    const [strawberry, setStrawberry] = useState(0)
    const total = chocolate + vanilla + strawberry;
    const chocolatePercentage =  total > 0 ? Math.round((chocolate / total ) * 100) : 0;
    const vanillaPercentage =  total > 0 ? Math.round((vanilla / total ) * 100) : 0;
    const strawberryPercentage =  total > 0 ? Math.round((strawberry / total ) * 100) : 0;

 return (<div className="votes-container">
    <h2>Vote Here</h2>
    <div className="buttons-container">
        <button onClick={() => setChocolate(chocolate + 1)}>Chocolate</button>
        <button onClick={() => setVanilla(vanilla + 1)}>Vanilla</button>
        <button onClick={() => setStrawberry(strawberry + 1)}>Strawberry</button>
    </div>
    <div className="graphContainer">
        <div className="Chocolate">
        <p>Chocolate {chocolate} {chocolatePercentage}% </p>
        <div style={{width: `${chocolatePercentage}%`}} className="chocolate progress"></div>
        </div>
        
        <div className="Vanilla">
        <p>Vanilla {vanilla} {vanillaPercentage}%</p>
        <div style={{width: `${vanillaPercentage}%`}} className="vanilla progress"></div>
        </div>
        <div className="Strawberry">
        <p>Strawberry {strawberry} {strawberryPercentage}% </p>
        <div style={{width: `${strawberryPercentage}%`}} className="strawberry progress"></div>
        </div>
    </div>
 </div>)
}