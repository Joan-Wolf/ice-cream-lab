import { useState } from "react";
import "./AdDesigner.css";

export function AdDesigner() {
    const [flavor, setFlavor] = useState("Strawberry");
    const [colorTheme, setColorTheme] = useState(false);
    const [fontSizeInput, setFontSize] = useState(12);

    function getAdClassName(): string {
        let classes = 'ad'
        return colorTheme ? classes + "dark" : classes + "light";
    }

    function getStyles() {
        return {fontSize: `${fontSizeInput}px`}
    }
    return (
        <div className="adDesigner-container">
            <h1>Ad Designer</h1>
            <div className={getAdClassName()}>
                <h3>Vote For</h3>
                <h2 style={getStyles()}>{flavor}</h2>
            </div>
            <h5>What to Support</h5>
            <div className="button-containers">
                <button onClick= {() => {setFlavor('Chocolate')}}
                disabled={flavor === "Chocolate"}>Chocolate</button>
                <button onClick= {() => {setFlavor('Vanilla')}} disabled={flavor === "Vanilla"}>Vanilla</button>
                <button onClick= {() => {setFlavor('Strawberry')}} disabled={flavor === "Strawberry"}>Strawberry</button>
            </div>
            <h5>Color Theme</h5>
            <div className="button-containers">
                <button onClick= {() => {setColorTheme(false)}} disabled={!colorTheme}>Light</button>
                <button onClick= {() => {setColorTheme(true)}} disabled={colorTheme}>Dark</button>
            </div>
            <h5>Font Size</h5>
            <div className="button-containers">
                <button onClick= {() => {setFontSize(fontSizeInput - 1 )}}>Down</button>
                <p></p>
                <button onClick= {() => {setFontSize(fontSizeInput + 1 )}}>Up</button>
            </div>
        </div>
    )
}