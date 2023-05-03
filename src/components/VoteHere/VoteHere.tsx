import { useState } from "react";
import "./VoteHere.css"

export function VotesComponent() {

    //return {width: `${width}`}; write a function for this so the bars change size

 return (<div className="votes-container">
    <h1>Vote Here</h1>
    <div className="buttons-container">
        <button>Chocolate</button>
        <button>Vanilla</button>
        <button>Strawberry</button>
    </div>
    <div className="graphContainer">
        <p>Chocolate</p>
        <div className="chocolate-bar"></div>
        <p>Vanilla</p>
        <div className="vanilla-bar"></div>
        <p>Strawberry</p>
        <div className="strawberry-bar"></div>
    </div>
 </div>)
}